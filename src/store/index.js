import { configureStore } from '@reduxjs/toolkit'

import isLoadingSlice from './slices/isLoading.slice'
import purchasesSlice from './slices/purchases.slice'
import productsSlice from './slices/products.slice'
import categorySlice from './slices/category.slice'
import cartListSlice from './slices/cartList.slice'

export default configureStore({
    reducer: {
        isLoading: isLoadingSlice,
        purchases: purchasesSlice,

        products: productsSlice,
        category: categorySlice,
        cartList: cartListSlice


    }
})
