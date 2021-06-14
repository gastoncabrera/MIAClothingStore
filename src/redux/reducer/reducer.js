const reducer = (state, action) => {
  switch (action.type) {
    case `ADD_SHOP`:
      return {
        ...state,
        shop: [...state.shop, action.payload],
      };
    case `DELETE_SHOP`:
      return {
        ...state,
        shop: [...state.shop.filter((item) => item.id !== action.payload)],
      };
    case `ADD_BUY`:
      return {
        ...state,
        cuantity: state.default_clothing_shop.cuantity + action.payload.cant,
      };

    default:
      return state;
  }
};
export default reducer;
