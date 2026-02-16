import { configureStore } from '@reduxjs/toolkit'
import storeReducer from '../feature/storeProd/StoreProdSlice'
import FoodReducer from '../feature/food/foodSlice'

export const store = configureStore({
    reducer: {
        store: storeReducer,
        food: FoodReducer,
    },
})