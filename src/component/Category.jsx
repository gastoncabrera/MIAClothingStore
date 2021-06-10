import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "../sass/pages/home.scss";

function Category({ category }) {
  return (
    <Fragment>
      <div className="category__container" id={category.cN}>
        <div className="category">
          <div>
            <img
              src={category.image}
              alt="imagen publicitaria de jeans"
              className="category__image"
            ></img>
            <div className="category__description">
              <h3 className="title">{category.name}</h3>
              <Link to="/productos">
                <button className="button">Ver Productos</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default Category;
