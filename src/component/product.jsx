import React from "react";
import "../sass/pages/home.scss";

const Product = (products) => {
  return (
    <div className="product__container">
      <img src={products.image} alt="remera" className="product__image" />
      <p className="product__off">33% OFF</p>
      <div className="product__cart">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.5rem"
          height="1.5rem"
          fill="currentColor"
          className="shopping-cart"
          viewBox="0 0 16 16"
        >
          <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
        </svg>
      </div>
      <p className="product__title">{products.title}</p>
      <div className="product__price">
        <p className="product__offerprice"></p>
        <p className="product__normalprice">${products.normalPrice}</p>
      </div>
      <span className="product__size">Talles: {products.size}</span>
    </div>
  );
};
export default Product;
