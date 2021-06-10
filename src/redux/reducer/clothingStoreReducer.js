import { BUY_CLOTHES, RETURN_CLOTHES } from "../actions/clothingStoreActions";

const default_clothing_shop = {
  cuantity: 0,
};

// borra y agregar un producto al carrito
const clothing_shop = (state = default_clothing_shop, action) => {
  switch (action.type) {
    case BUY_CLOTHES: {
      return {
        ...state,
        cuantity: state.cuantity + action.payload,
      };
    }
    case RETURN_CLOTHES: {
      return {
        ...state,
        cuantity: state.cuantity - action.payload,
      };
    }
    default:
      return state;
  }
};
export default clothing_shop;
