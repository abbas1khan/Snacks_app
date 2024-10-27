import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import persistReducer from 'redux-persist/es/persistReducer';
import TodoSlice from './TodoSlice';
import CartSlice from './CartSlice';

let persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['cartData']
}

let rootReducer = combineReducers({
    cartData: CartSlice,
})

let persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
    }),
})