import React, { Fragment } from "react";
import Header from "../component/Header";
import "../sass/pages/productDescription.scss";
import Footer from "../component/Footer";

const ProductDescription = () => {
  return (
    <Fragment>
      <Header />
      <div className="container__shop">
        <div>
          <div className="image__container"></div>
        </div>
        <div className="description__container">
          <h5 className="description__title">Jean Italian</h5>
          <div className="description__quantity">
            <div className="removeQuantity btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2rem"
                height="2rem"
                fill="currentColor"
                class="bi bi-dash-circle"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
              </svg>
            </div>
            1
            <div className="addQuantity btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2rem"
                height="2rem"
                fill="currentColor"
                class="bi bi-plus-circle"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
              </svg>
            </div>
          </div>
          <div>
            <div className="description__size">
              <div className="size">
                <input type="radio" />S
              </div>
              <div className="size">
                <input type="radio" />M
              </div>
              <div className="size">
                <input type="radio" />L
              </div>
            </div>
          </div>
          <p className="description__price">Total:$1900</p>
          <button className="description__addShop">Agregar al carrito</button>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};
export default ProductDescription;
