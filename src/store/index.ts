import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cart-slice';


export const store = configureStore({
  reducer: {cartSlice:cartSlice.reducer},
})
