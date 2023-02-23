import { IFilter } from '../interfaces/filter-interface'
import { storageService } from './async-storage.service'
import { utilService } from './util.service'
import minifiedStays from '../data/minified-stays.json'
import filters from '../data/filters.json'

const STORAGE_KEY: string = 'StaysDB'
const stayIndexIncrement = 20

export const stayService = {
    getFilters,
    getStays,
    stayIndexIncrement,
}

_createStays()

async function getStays(idx: number = 0): Promise<any> {
    try {
        const stays = await storageService.query(STORAGE_KEY)
        return stays.slice(idx, idx + stayIndexIncrement)
    } catch (err) {
        throw err
    }
}

function _createStays() {
    const stays = utilService.loadFromStorage(STORAGE_KEY)
    if (!stays || !stays.length) {
        let stays: any = minifiedStays
        stays.sort(() => Math.random() - 0.5)
        stays = stays.map((stay: any) => {
            stay._id = utilService.makeId()
            return stay
        })
        utilService.saveToStorage(STORAGE_KEY, stays)
    }
}

function getFilters(): IFilter[] {
    return filters
}
