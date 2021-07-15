import { createSlice } from "@reduxjs/toolkit";
import { products, sizes } from "./../../const";

export const cartSlice = createSlice({
  name: "cart",

  initialState: {
    carts: [],
  },

  reducers: {
    addCartItem(state, { payload }) {
      state.carts.push({
        ...payload,
        id: Date.now(),
      });
    },

    deleteCartItem(state, { payload }) {
      state.carts.splice(payload, 1);
    },

    updateCartItem(state, action) {
      const { quantity, sizeId, productId } = action.payload;

      const cartItemIndex = state.carts.findIndex(
        (cartItem) => cartItem.sizeId === sizeId && cartItem.productId === productId
      );

      state.carts[cartItemIndex].quantity = quantity;
    },
  },
});

export const { addCartItem, deleteCartItem, updateCartItem } = cartSlice.actions;

export const selectCarts = (state) => state.cart.carts;

export const selectCartsPopulated = (state) =>
  state.cart.carts.map(({ productId, sizeId, quantity, id }) => {
    const product = products.find((productItem) => productItem.id === sizeId);
    const size = sizes.find((sizeItem) => sizeItem.id === sizeId);

    const price = product.offerPricePrice || product.normalPrice;
    const total = price * quantity;

    return {
      productId,
      sizeId,
      quantity,
      id,
      product,
      size,
      price,
      total,
    };
  });

export default cartSlice.reducer;
