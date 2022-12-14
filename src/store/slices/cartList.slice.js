import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import Login from '../../components/Login/Login';
import getConfig from '../../utils/getConfig';
import { setIsLoading } from './isLoading.slice';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        setCart: (state, action) => {
            
            return action.payload
        }

    }
})

export const getCartListThunk = () => (dispatch) => {

    dispatch(setIsLoading(true));
    axios
      .get("https://ecommerce-api-react.herokuapp.com/api/v1/cart", getConfig())
      .then((res) => dispatch(setCart(res.data.data.cart.products)))
      .catch(error => {
          console.log(error.response)
            } )
      .finally(() => dispatch(setIsLoading(false)));
  };

  export const addCartItemThunk = (addNew) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios
      .post(
        "https://ecommerce-api-react.herokuapp.com/api/v1/cart",
        addNew,
        getConfig()
      )
      .then(() => dispatch(getCartListThunk()))
      .catch((error) => console.log(error.response))
      .finally(() => dispatch(setIsLoading(false)));
  };

  export const updateCartItemThunk = (updateNew) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios
      .patch(
        "https://ecommerce-api-react.herokuapp.com/api/v1/cart",
          updateNew,
        getConfig()
      )
      .then(() => dispatch(getCartListThunk()))
      .catch((error) => console.log(error.response))
      .finally(() => dispatch(setIsLoading(false)));
  };

export const {setCart } = cartSlice.actions;

export default cartSlice.reducer;
