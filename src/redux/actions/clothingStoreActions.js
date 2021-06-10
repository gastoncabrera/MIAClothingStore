export const BUY_CLOTHES = "BUY_CLOTHES";
export const RETURN_CLOTHES = "RETURN_CLOTHES";

export const buy_clothes_action = (cant) => {
  return {
    type: BUY_CLOTHES,
    payload: cant,
  };
};

export const return_clothes_action = (cant) => {
  return {
    type: RETURN_CLOTHES,
    payload: cant,
  };
};

// export const ADD_CLOTHES = "ADD_CLOTHES";
// export const DELETE_CLOTHES = "DELETE_CLOTHES";

// // Al pasar la accion paso la prenda con el id
// export const add_clothes_action = (props) => {
//   return {
//     type: BUY_CLOTHES,
//     payload: props,
//   };
// };
