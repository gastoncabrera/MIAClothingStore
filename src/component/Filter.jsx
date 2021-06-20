import React, { Fragment, useState } from "react";
import ProductsList from "../pages/ProductsList";

const Filter = () => {
  const [filter, setfilter] = useState({ category: `` });
  const handleChange = (event) => {
    setfilter({
      ...filter,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Fragment>
      <div className="category__filter">
        <select
          name="Category"
          id="Category"
          placeholder="Categorias"
          onChange={handleChange}
        >
          Categorias
          <option value="">Ver todos</option>
          <option value="jeans" name="category">
            Jeans
          </option>
          <option value="remeras" name="category">
            Remeras
          </option>
          <option value="blusas" name="category">
            Blusas
          </option>
        </select>
      </div>
      <div
        className="filterSelect__size"
        onChange={(event) => console.log(event.target.value)}
      >
        <p>Talles:</p>
        <label htmlFor="size--s" className="size">
          <input type="checkbox" id="size--s" value="s" />S
        </label>
        <label htmlFor="size--m" className="size">
          <input type="checkbox" id="size--m" value="s" />M
        </label>
        <label htmlFor="size--l" className="size">
          <input type="checkbox" id="size--l" value="s" />L
        </label>
      </div>
      <div className="filterSelect__color">
        <p>Colores:</p>
        <label htmlFor="color--white" className="color">
          <input type="checkbox" id="color--white" />
          Blanco
        </label>
        <label htmlFor="color--blue" className="color">
          <input type="checkbox" id="color--blue" />
          Azul
        </label>
        <label htmlFor="color--black" className="color">
          <input type="checkbox" id="color--black" />
          Negro
        </label>
      </div>
      {/* <ProductsList props={filter} /> */}
    </Fragment>
  );
};
export default Filter;
