import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",

  initialState: {
    carts: [],
  },

  reducers: {
    addShop(state, action) {
      state.carts.push({
        ...action.payload,
        id: Date.now(),
      });
    },

    deleteShop(state, action) {
      state.carts.splice(action.payload, 1);
    },

    updateShop(state, { index, cartData }) {
      state.carts[index] = cartData;
    },
  },
});

export const { addShop, deleteShop, updateShop } = cartSlice.actions;

export const selectCarts = (state) => state.cart.carts;

export default cartSlice.reducer;
