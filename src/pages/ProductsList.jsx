import React, { Fragment, useState } from "react";
import "../sass/pages/productsList.scss";
import Footer from "../component/Footer";
import ProductPrueba from "../component/productPrueba";

function ProductsList(props) {
  const [filter, setfilter] = useState({ category: `` });
  const handleChange = (event) => {
    setfilter({
      ...filter,
      [event.target.name]: event.target.value,
    });
  };

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
            <div className="category__filter">
              <select
                name="Category"
                id="Category"
                placeholder="Categorias"
                onChange={handleChange}
              >
                Categorias
                <option value="">Ver todos</option>
                <option value="jean" name="category">
                  Jeans
                </option>
                <option value="remera" name="category">
                  Remeras
                </option>
                <option value="cinturon" name="category">
                  Cinturon
                </option>
              </select>
            </div>
            <div
              className="filterSelect__size"
              onClick={(event) => console.log(event)}
            >
              <p>Talles:</p>
              <label htmlFor="size--s" className="size">
                <input type="checkbox" id="size--s" value="S" name="talle" />S
              </label>
              <label htmlFor="size--m" className="size">
                <input type="checkbox" id="size--m" value="M" name="talle" />M
              </label>
              <label htmlFor="size--l" className="size">
                <input type="checkbox" id="size--l" value="L" name="talle" />L
              </label>
            </div>
          </div>
        </div>
        <div className="productsFilter__container">
          {/* {productsPopulated.map((props) => (
            <Product product={props} key={props.id} />
          ))} */}
          <ProductPrueba props={filter} />
          {console.log(filter)}
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}
export default ProductsList;
