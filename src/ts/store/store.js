import { combineReducers, legacy_createStore } from 'redux'

import { stayReducer } from './stay/stay.reducer.js'

const rootReducer = combineReducers({
    stayModule: stayReducer,
})

const middleware = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
    : undefined
export const store = legacy_createStore(rootReducer, middleware)
