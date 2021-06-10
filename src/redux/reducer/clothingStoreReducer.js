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
// Puede ser que falte exportar shop de const.js
// const default_clothing_add = {
//   shop: [],
// };
// const clothing_add = (state = default_clothing_add, action) => {
//   switch (action.type) {
//     case value:

//     default:
//   }
// };
export default clothing_shop;
