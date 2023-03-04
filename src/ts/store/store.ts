import { combineReducers, legacy_createStore } from 'redux'

import { stayReducer } from './stay/stay.reducer'
import { appReducer } from './app/app.reducer'

const rootReducer = combineReducers({
    stayModule: stayReducer,
    appModule: appReducer,
})

export const store = legacy_createStore(rootReducer)
