import React from "react";
import "../sass/pages/home.scss";
import PercentajeOffer from "./PercentajeOffer";
import { connect } from "react-redux";
// import { Provider } from "react-redux";
// import store from "../redux/store";

import {
  buy_clothes_action,
  return_clothes_action,
} from "../redux/actions/clothingStoreActions";
import { Component } from "react";
class Product extends Component {
  render() {
    const { products } = this.props;

    return (
      // <Provider store={store}></Provider>
      <div className="product__container">
        <img src={products.images} alt="remera" className="product__image" />
        <span className="product__off">
          <PercentajeOffer
            props={
              Math.round(
                (products.offerPricePrice * 100) / products.normalPrice
              ) - 100
            }
          />
          %
        </span>
        <div
          className="product__cart"
          onClick={() => this.props.buy_clothes_action(1)}
        >
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
        <span className="product__size">Talles: {products.sizes}</span>
      </div>
    );
  }
}
const mapDispatchToProps = {
  buy_clothes_action,
  return_clothes_action,
};
export default connect(null, mapDispatchToProps)(Product);
