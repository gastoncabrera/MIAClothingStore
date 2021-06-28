import React, { useState } from "react";
import { Fragment } from "react";
import ProductPrueba from "./productPrueba";
import "../sass/components/prueba.scss";

const Prueba = () => {
  const [filter, setfilter] = useState({ category: `` });
  const escucharCambios = (event) => {
    setfilter({
      ...filter,
      [event.target.name]: event.target.value,
    });
  };
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
