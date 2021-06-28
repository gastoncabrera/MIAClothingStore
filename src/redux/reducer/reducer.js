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
    case `MODIFY_SHOP`:
      return {
        ...state,
        shop: [...state.shop.assign((state.shop.quantity, action.payload))],
      };

    default:
      return state;
  }
};
export default reducer;
