import { configureStore } from '@reduxjs/toolkit'
import isLoadingSlice from './slices/isLoading.slice'
import purchasesSlice from './slices/purchases.slice'

export default configureStore({
    reducer: {
        isLoading: isLoadingSlice,
        purchases: purchasesSlice
    }
})
