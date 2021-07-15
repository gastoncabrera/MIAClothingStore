import { createSlice } from "@reduxjs/toolkit";
import { products, sizes, maxProductStock } from "./../../const";

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
      const cartItemIndex = state.carts.findIndex((cartItem) => cartItem.id === payload);

      state.carts.splice(cartItemIndex, 1);
    },

    updateCartItem(state, action) {
      const { quantity, sizeId, productId } = action.payload;

      const cartItemIndex = state.carts.findIndex(
        (cartItem) => cartItem.sizeId === sizeId && cartItem.productId === productId
      );

      state.carts[cartItemIndex].quantity += quantity;

      if (state.carts[cartItemIndex].quantity >= maxProductStock) {
        state.carts[cartItemIndex].quantity = maxProductStock;
      }
    },

    subtractQuantityCartItem(state, { payload }) {
      const cartItemIndex = state.carts.findIndex((cartItem) => cartItem.id === payload);

      state.carts[cartItemIndex].quantity--;
    },

    addQuantityCartItem(state, { payload }) {
      const cartItemIndex = state.carts.findIndex((cartItem) => cartItem.id === payload);

      state.carts[cartItemIndex].quantity++;
    },
  },
});

export const {
  addCartItem,
  deleteCartItem,
  updateCartItem,
  subtractQuantityCartItem,
  addQuantityCartItem,
  findIndexCartItem,
} = cartSlice.actions;

export const selectCarts = (state) => state.cart.carts;

export const selectCartsLength = (state) => state.cart.carts.length;

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

export const selectCartTotal = (state) => {
  const cartsPopulated = selectCartsPopulated(state);

  return cartsPopulated.reduce((prev, current) => {
    return prev + current.total;
  }, 0);
};

export default cartSlice.reducer;
