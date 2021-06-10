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
