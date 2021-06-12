export const addShop = (payload) => ({
  type: "ADD_SHOP",
  payload,
});

export const ADD_BUY = "ADD_BUY";

export const add_buy = (cant) => {
  return {
    type: ADD_BUY,
    payload: cant,
  };
};
