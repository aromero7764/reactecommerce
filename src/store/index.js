import { configureStore } from '@reduxjs/toolkit'
import cartOpenSlice  from './slices/CartOpen.slice'
import isLoadingSlice from './slices/isLoading.slice'
import purchasesSlice from './slices/purchases.slice'
import productsSlice from './slices/products.slice'
import categorySlice from './slices/category.slice'

export default configureStore({
    reducer: {
        isLoading: isLoadingSlice,
        purchases: purchasesSlice,
        cartOpen: cartOpenSlice,
        products: productsSlice,
        category: categorySlice


    }
})
