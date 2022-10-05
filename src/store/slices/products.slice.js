import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setIsLoading } from './isLoading.slice';


export const productsSlice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
        /* crear un action */
        setProducts: (state, action) => {
                                /* aqui esta lo que recibo */
            const allProducts = action.payload
            return allProducts
        }


    }
})

export const getProductsThunk = () => (dispatch) => {
    dispatch(setIsLoading(true));
     axios.get("https://ecommerce-api-react.herokuapp.com/api/v1/products")
        .then((res) => dispatch(setProducts(res.data.data.products)))
        .finally(() => dispatch(setIsLoading(false)));
}


export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;
