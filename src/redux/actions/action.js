export const addShop = (payload) => ({
  type: "ADD_SHOP",
  payload,
});
export const deleteShop = (payload) => ({
  type: "DELETE_SHOP",
  payload,
});
export const add_buy = (cant) => {
  return {
    type: "ADD_BUY",
    payload: cant,
  };
};
export const getImageSource = (payload) => ({
  type: "GET_IMAGE_SOURCE",
  payload,
});
