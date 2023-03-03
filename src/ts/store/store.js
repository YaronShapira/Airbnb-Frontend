import { combineReducers, legacy_createStore } from 'redux'

import { stayReducer } from './stay/stay.reducer.js'
import { appReducer } from './app/app.reducer.js'

const rootReducer = combineReducers({
    stayModule: stayReducer,
    appModule: appReducer,
})

const middleware = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
    : undefined
export const store = legacy_createStore(rootReducer, middleware)
