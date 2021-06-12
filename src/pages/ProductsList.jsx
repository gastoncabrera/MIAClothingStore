import React, { Fragment } from "react";
import "../sass/pages/productsList.scss";
import Filter from "../component/Filter";
import Footer from "../component/Footer";
import { products } from "../const";
import Product from "../component/product";

function ProductsList() {
  return (
    <Fragment>
      <h1 className="title">Productos</h1>
      <div className="products__container">
        <div className="searchFilter__container">
          <div className="search">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1rem"
              height="1rem"
              fill="gray"
              className="search__image"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
            <input type="search" className="search__input"></input>
          </div>
          <div className="filter">
            <Filter />
          </div>
        </div>
        <div className="productsFilter__container">
          {products.map((props) => (
            <Product products={props} key={props.id} />
          ))}
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}
export default ProductsList;
