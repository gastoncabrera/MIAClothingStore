import React, { useState } from "react";
import "../sass/components/buys.scss";
import { connect } from "react-redux";
// import { deleteShop } from "../store/actions/action";
// import { modifyShop } from "../store/actions/action";

const Buys = (product) => {
  const { id, title, images, offerPricePrice, normalPrice, sizes } =
    product.product.product;

  const { quantity } = product.product;

  const handleDeleteBuy = (id) => {
    // product.deleteShop(id);
  };

  const talle = product.product.sizes;

  const nuevotalle = () => {
    if (talle === "") {
      return sizes[0].size;
    } else return talle;
  };

  const handleModifyShop = (id) => {
    // product.modifyShop(id);
  };

  const [quantitymodify, setquantitymodify] = useState(quantity);

  return (
    <>
      <div className="container__buy">
        <img className="buy__images" src={images} alt="producto" />

        <div className="container__description">
          <h1 className="buy__title">{title}</h1>

          <p>Talle: {nuevotalle()}</p>
          Cantidad:

          <div>
            <button
              disabled={quantity <= 1}
              onClick={() => setquantitymodify(quantitymodify - 1)}
            >
              -
            </button>

            {quantitymodify}

            <button
              disabled={quantity > 2}
              onClick={() => handleModifyShop(id)}
            >
              +
            </button>
          </div>

          {offerPricePrice === null ? (
            <p className="buy__price">${normalPrice * quantitymodify}</p>
          ) : (
            <p className="buy__price">${offerPricePrice * quantitymodify}</p>
          )}
        </div>

        <div className="buy__delete">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.3rem"
            height="1.3rem"
            fill="currentColor"
            className="deletebutton"
            viewBox="0 0 16 16"
            onClick={() => handleDeleteBuy(id)}
          >
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
            <path
              fillRule="evenodd"
              d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

// const mapDispatchToProps = {
//   deleteShop,
//   modifyShop,
// };

export default Buys
