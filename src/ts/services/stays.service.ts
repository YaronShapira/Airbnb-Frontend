import { IFilter } from '../interfaces/filter-interface'
import { storageService } from './async-storage.service'
import { utilService } from './util.service'
import minifiedStays from '../data/minified-stays.json'
import filters from '../data/filters.json'
import filterNames from '../data/filter-names.json'
import destinations from '../data/destinations.json'
import { IFilterBy } from '../interfaces/filter-by-interface'
import { IStay, IStayReview } from '../interfaces/stay-interface'
import { ISearchBy } from '../interfaces/search-by-interface'

const STORAGE_KEY: string = 'StaysDB'
const stayIndexIncrement = 20
const NICHE_RATING_STRINGS = ['cleanliness', 'accuracy', 'communication', 'location', 'checkIn', 'value']

export const stayService = {
    getFilters,
    getStays,
    getEmptyFilterBy,
    stayIndexIncrement,
    getStay,
    getStayRating,
    getStayNicheRating,
    getEmptySearchBy,
    getSearchByFromParams,
    getAllStays,
    getDatesArray,
    saveStay,
    generateRandomDateRange,
    formatDateRange,
}

_createStays()

async function query() {
    return await storageService.query(STORAGE_KEY)
}

async function saveStay(stay: IStay) {
    return await storageService.put(STORAGE_KEY, stay)
}

async function getStays(idx: number = 0, filterBy: IFilterBy = getEmptyFilterBy(), searchBy: ISearchBy): Promise<any> {
    try {
        const stays = await query()
        const searchedStays = _searchStays(stays, searchBy)
        const filteredStays = _filterStays(searchedStays, filterBy)
        return filteredStays.slice(stayIndexIncrement * idx, stayIndexIncrement * idx + stayIndexIncrement)
    } catch (err) {
        throw err
    }
}

function getAllStays() {
    return query()
}

async function getStay(_id: string) {
    const stays = await query()
    return stays.find((stay: IStay) => stay._id === _id)
}

function getStayRating(stay: IStay) {
    return (
        stay.reviews.reduce((acc: number, review: IStayReview) => {
            const values: number[] = Object.values(review.moreRate)
            const average = values.reduce((sum, value) => sum + value, 0) / values.length

            return acc + average
        }, 0) / stay.reviews.length
    )
}

function getStayNicheRating(stay: IStay, nicheRating: string) {
    if (!NICHE_RATING_STRINGS.includes(nicheRating)) return 0
    return (
        stay.reviews.reduce((acc: number, review: IStayReview) => {
            return acc + review.moreRate[nicheRating]
        }, 0) / stay.reviews.length
    )
}

function _filterStays(stays: IStay[], filterBy: IFilterBy): IStay[] {
    let filteredStays = stays
    if (filterBy.selectedFilter) {
        filteredStays = filteredStays.filter(stay => stay.filters.includes(filterBy.selectedFilter))
    }
    if (filterBy.minPrice > 0) {
        filteredStays = filteredStays.filter(stay => stay.price > filterBy.minPrice)
    }
    if (filterBy.maxPrice) {
        filteredStays = filteredStays.filter(stay => stay.price < filterBy.maxPrice)
    }
    if (filterBy.types.length) {
        filteredStays = filteredStays.filter(stay => {
            return filterBy.types.includes(stay.type)
        })
    }
    return filteredStays
}

function getSearchByFromParams() {
    const searchBy = utilService.getQueryParams()
    if (utilService.isObjectEmpty(searchBy)) return stayService.getEmptySearchBy()

    searchBy['checkIn'] = new Date(+searchBy['checkIn'])
    searchBy['checkOut'] = new Date(+searchBy['checkOut'])
    searchBy['adults'] = +searchBy['adults']
    searchBy['infants'] = +searchBy['infants']
    searchBy['pets'] = +searchBy['pets']
    searchBy['children'] = +searchBy['children']
    return searchBy
}

function _searchStays(stays: IStay[], searchBy: ISearchBy) {
    if (utilService.isObjectEmpty(searchBy)) return stays

    let filteredStays = stays
    filteredStays = stays.filter(
        (stay: IStay) =>
            stay.stayDetails.guests > +searchBy.adults + +searchBy.children + +searchBy.infants + +searchBy.pets
    )
    if (searchBy.destination && searchBy.destination !== "i'm flexible") {
        filteredStays = filteredStays.filter((stay: IStay) =>
            stay.loc.destination.toLowerCase().includes(searchBy.destination)
        )
    }
    if (!utilService.isToday(searchBy.checkOut)) {
        filteredStays = filteredStays.map(stay => {
            stay.datesForPreview[0] = searchBy.checkIn
            stay.datesForPreview[1] = searchBy.checkOut
            return stay
        })
    }
    return filteredStays
}

function getEmptyFilterBy(): IFilterBy {
    return {
        selectedFilter: '',
        minPrice: 20,
        maxPrice: 1000,
        types: [],
    }
}
function getEmptySearchBy(): ISearchBy {
    return {
        destination: '',
        adults: 0,
        children: 0,
        infants: 0,
        pets: 0,
        checkIn: new Date(),
        checkOut: new Date(),
    }
}

function _createStays() {
    const stays = utilService.loadFromStorage(STORAGE_KEY)
    if (!stays || !stays.length) {
        let stays = _makeStays()
        utilService.saveToStorage(STORAGE_KEY, stays)
    }
}

function getFilters(): IFilter[] {
    return filters
}

function _makeStays() {
    let stays: any = minifiedStays
    stays.sort(() => Math.random() - 0.5)
    stays = stays.map((stay: any) => {
        stay._id = utilService.makeId()
        stay.filters = [
            utilService.getRandomItemFromArr(filterNames),
            utilService.getRandomItemFromArr(filterNames),
            utilService.getRandomItemFromArr(filterNames),
            utilService.getRandomItemFromArr(filterNames),
            utilService.getRandomItemFromArr(filterNames),
            utilService.getRandomItemFromArr(filterNames),
            utilService.getRandomItemFromArr(filterNames),
            utilService.getRandomItemFromArr(filterNames),
        ]
        stay.loc.destination = utilService.getRandomItemFromArr(destinations)
        stay.takenDates = []
        stay.datesForPreview = generateRandomDateRange()
        return stay
    })
    return stays
}

function getDatesArray(checkInDate: Date, checkOutDate: Date): Date[] {
    const datesArray: Date[] = []
    const currentDate = new Date(checkInDate)
    while (currentDate <= checkOutDate) {
        datesArray.push(new Date(currentDate))
        currentDate.setDate(currentDate.getDate() + 1)
    }
    return datesArray
}

function generateRandomDateRange() {
    const startDate = new Date()
    startDate.setDate(startDate.getDate() + Math.floor(Math.random() * 180)) // Add random number of days (up to 6 months) to current date
    const numDays = Math.floor(Math.random() * 7) + 2 // Generate a random number between 2 and 8
    const endDate = new Date(startDate)
    endDate.setDate(endDate.getDate() + numDays - 1) // Set end date based on start date and number of days
    return [startDate, endDate]
}

function formatDateRange(startDate: Date, endDate: Date) {
    const startMonth = startDate.toLocaleString('default', { month: 'short' }) // Get short month name from start date
    const endMonth = endDate.toLocaleString('default', { month: 'short' }) // Get short month name from end date
    return `${startMonth} ${startDate.getDate()} - ${endMonth} ${endDate.getDate()}`
}
