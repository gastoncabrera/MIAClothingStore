import React, { Fragment } from "react";
import "../sass/pages/home.scss";

function Category(category) {
  return (
    <Fragment>
      <div className="category" id={category.className}>
        <div>
          <img
            src={category.image}
            alt="imagen publicitaria de jeans"
            className="category__image"
          ></img>
          <div className="category__description">
            <h3 className="title">{category.name}</h3>
            <button className="button">Ver Productos</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default Category;
