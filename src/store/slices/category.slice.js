import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import setIsLoading from './isLoading.slice';


export const categorySlice = createSlice({
    name: 'category',
    initialState: [],
    reducers: {
        setCategory: (state, action) => {
            const categories = action.payload
            return categories
        }

    }
})

export const getCategoryThunk = () => (dispatch) => {
    dispatch(setIsLoading(true));
    axios.get("https://ecommerce-api-react.herokuapp.com/api/v1/products/categories")
        .then((res) => dispatch(setCategory(res.data)))
        .finally(() => dispatch(setIsLoading(false)));
}

export const { setCategory } = categorySlice.actions;

export default categorySlice.reducer;
