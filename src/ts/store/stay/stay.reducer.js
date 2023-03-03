import { stayService } from '../../services/stays.service'

export const SET_SEARCH_BY = 'SET_SEARCH_BY'

const initialState = {
    searchBy: stayService.getSearchByFromParams(),
}
console.log('initialState:', initialState)

export function stayReducer(state = initialState, action = {}) {
    switch (action.type) {
        case SET_SEARCH_BY:
            return { ...state, searchBy: action.searchBy }

        default:
            return { ...state }
    }
}
