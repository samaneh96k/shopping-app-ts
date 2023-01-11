import { PayloadAction, createSlice } from "@reduxjs/toolkit";
interface Item {
  id: string;
  image: string;
  title: string;
  price: string;
  rating: Rate;
  rate: string;
  quantity: number;
 
}
interface Rate{
  rate:string
}
interface ItemsSliceState {
  items: Item[];

}
const initialState: ItemsSliceState = {
  items: []
 
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state: ItemsSliceState, action :PayloadAction<Item>) => {
      const itemInCart = state.items.find(
        (item: Item) => item.id === action.payload.id
      );
      state.items.find(
        (item: Item) =>   item.quantity += action.payload.quantity
       )
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.items.push({
          ...action.payload       });
      }
    }
  }
});
export const cartActions = cartSlice.actions;
export default cartSlice;
