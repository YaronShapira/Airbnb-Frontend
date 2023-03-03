import { store } from '../store'
import { SET_SEARCH_BY } from './stay.reducer'

export async function setSearchBy(searchBy) {
    store.dispatch({ type: SET_SEARCH_BY, searchBy })
}
