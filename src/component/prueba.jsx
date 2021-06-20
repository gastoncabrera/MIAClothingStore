import React, { useState } from "react";
import { Fragment } from "react";
import { products } from "../const";
import ProductPrueba from "./productPrueba";
import "../sass/components/prueba.scss";
import Product from "./product";

const Prueba = () => {
  const [filter, setfilter] = useState({ category: `` });
  const escucharCambios = (event) => {
    setfilter({
      ...filter,
      [event.target.name]: event.target.value,
    });
  };

  // const productsFilter = products.filter(
  //   (props) => props.categories == {filter.category}
  // );
  // const total = productsFilter.map((x) => x.title);
  // console.log(total);
  return (
    <Fragment>
      <div className="margen">
        <select
          name="category"
          id="Category"
          placeholder="Categorias"
          onChange={escucharCambios}
        >
          Categorias
          <option value="verTodos">Ver todos</option>
          <option value="1" name="category">
            Jeans
          </option>
          <option value="2" name="category">
            Remeras
          </option>
          <option value="3" name="category">
            Blusas
          </option>
        </select>
      </div>
      <ProductPrueba props={filter.category} />
    </Fragment>
  );
};
export default Prueba;
