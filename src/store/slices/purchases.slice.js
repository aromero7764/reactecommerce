import { createSlice } from '@reduxjs/toolkit';
import { setIsLoading } from './isLoading.slice';
import axios from 'axios';
import getConfig from '../../utils/getConfig';

export const purchasesSlice = createSlice({
    name: 'purchases',
    initialState: [],
    reducers: {
        setPurchases: (state, action) => {
            return action.payload
        }

    }
})

export const getPurchesesThunk = () => (dispatch) => {

    dispatch(setIsLoading(true));
    axios
      .get("https://ecommerce-api-react.herokuapp.com/api/v1/purchases", getConfig())
      .then((res) => dispatch(setPurchases(res.data)))
      .finally(() => dispatch(setIsLoading(false)));
  };

export const { setPurchases } = purchasesSlice.actions;

export default purchasesSlice.reducer;
