import { createSlice } from '@reduxjs/toolkit';

export const cartOpenSlice = createSlice({
    name: 'cartOpen',
    initialState: true,
    reducers: {
        setCartOpenState: (state, action) => {
             return action.payload
        }

    }
})

export const { setCartOpenState } = cartOpenSlice.actions;

export default cartOpenSlice.reducer;
