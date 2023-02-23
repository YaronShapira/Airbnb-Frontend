import { IFilter } from '../interfaces/filter-interface'
import { storageService } from './async-storage.service'
import { utilService } from './util.service'
import minifiedStays from '../data/minified-stays.json'
import filters from '../data/filters.json'
import filterNames from '../data/filter-names.json'
import { IFilterBy } from '../interfaces/filter-by-interface'

const STORAGE_KEY: string = 'StaysDB'
const stayIndexIncrement = 20

export const stayService = {
    getFilters,
    getStays,
    stayIndexIncrement,
}

_createStays()

async function getStays(idx: number = 0, filterBy: IFilterBy = _getEmptyFilterBy()): Promise<any> {
    try {
        const stays = await storageService.query(STORAGE_KEY)
        const filteredStays = _filterStays(stays, filterBy)
        return filteredStays.slice(stayIndexIncrement * idx, stayIndexIncrement * idx + stayIndexIncrement)
    } catch (err) {
        throw err
    }
}

function _filterStays(stays: any[], filterBy: IFilterBy): any[] {
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
    if (filterBy.type.entirePlace || filterBy.type.privateRoom) {
        if (filterBy.type.entirePlace) {
            filteredStays = filteredStays.filter(stay => stay.type === 'Entire home/apt')
        }
        if (filterBy.type.privateRoom) {
            filteredStays = filteredStays.filter(stay => stay.type === 'Private room')
        }
    }
    return filteredStays
}

function _getEmptyFilterBy(): IFilterBy {
    return {
        selectedFilter: '',
        minPrice: 20,
        maxPrice: 1000,
        type: {
            entirePlace: false,
            privateRoom: false,
            SharedRoom: false,
        },
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
        return stay
    })
    return stays
}
