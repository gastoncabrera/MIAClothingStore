function product(prop) {
  const { product } = prop;
  return product;
}

function quantity(prop) {
  const { quantity } = prop;
  return quantity;
}

function size(prop) {
  const { size } = prop;
  return size;
}

function otracosa(props) {
  const nose = props;
  return nose;
}

function comparacion(state) {
  console.log(state);
}

const reducer = (state, action) => {
  switch (action.type) {
    case `ADD_SHOP`:
      return {
        ...state,
        // shop: state.shop.map((product) => {
        //   debugger;
        //   console.log(product.shop);
        // }),
      };

    // --------------
    //   {
    //     product: product(action.payload),
    //     estado: estado,
    //   },
    // ],
    // ---------------------------------------------
    // shop: [
    //   ...state.shop,
    //   // {
    //   //   product: product(action.payload),
    //   //   quantity: quantity(action.payload),
    //   //   size: size(action.payload),
    //   // },
    // ],
    case `DELETE_SHOP`:
      return {
        ...state,
        shop: [...state.shop.filter((item) => item.id !== action.payload)],
      };

    case `MODIFY_SHOP`:
      return {
        ...state,
        shop: [
          ...state.shop.map((item) => {
            if (item.product.id == action.payload) {
              item.quantity = item.quantity + 1;
              return item;
            }
          }),
        ],
      };

    default:
      return state;
  }
};
export default reducer;
