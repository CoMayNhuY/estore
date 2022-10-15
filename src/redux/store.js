// src/redux/store.js
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { cartReducer } from './CartSlice';

const rootReducer = combineReducers({
    cart: cartReducer,
});
export const store = configureStore({
    reducer: rootReducer,
});
