import { IFilter } from '../interfaces/filter-interface'
import { storageService } from './async-storage.service'
import { utilService } from './util.service'
import minifiedStays from '../data/minified-stays.json'
import filters from '../data/filters.json'
import filterNames from '../data/filter-names.json'
import { IFilterBy } from '../interfaces/filter-by-interface'
import { IStay } from '../interfaces/stay-interface'

const STORAGE_KEY: string = 'StaysDB'
const stayIndexIncrement = 20

export const stayService = {
    getFilters,
    getStays,
    getEmptyFilterBy,
    stayIndexIncrement,
    getStay,
}

_createStays()

async function query() {
    return await storageService.query(STORAGE_KEY)
}

async function getStays(idx: number = 0, filterBy: IFilterBy = getEmptyFilterBy()): Promise<any> {
    try {
        const stays = await query()
        const filteredStays = _filterStays(stays, filterBy)
        return filteredStays.slice(stayIndexIncrement * idx, stayIndexIncrement * idx + stayIndexIncrement)
    } catch (err) {
        throw err
    }
}

async function getStay(_id: string) {
    const stays = await query()
    return stays.find((stay: IStay) => stay._id === _id)
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

function getEmptyFilterBy(): IFilterBy {
    return {
        selectedFilter: '',
        minPrice: 20,
        maxPrice: 1000,
        types: [],
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
