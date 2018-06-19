import FilesystemStorage from 'redux-persist-filesystem-storage'
import { createStore, combineReducers } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import initializeApplication from './reducers'

const rootReducer = combineReducers({
    initializeApplication
})

const rootPersistConfig = {
    key: 'AnnoRead',
    storage: FilesystemStorage
}

const persistedReducer = persistReducer(rootPersistConfig, rootReducer)
    
export default () => {
    let store = createStore(persistedReducer)
    let persistor = persistStore(store)
    return { store, persistor }
}