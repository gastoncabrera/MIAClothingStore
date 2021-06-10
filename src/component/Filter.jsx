import React, { Fragment } from "react";

const Filter = () => {
  return (
    <Fragment>
      <div className="category__filter">
        <select name="Category" id="Category" placeholder="Categorias">
          Categorias
          <option value="">Ver todos</option>
          <option value=""> Jeans</option>
          <option value=""> Remeras</option>
          <option value=""> Blusas</option>
        </select>
      </div>
      <div className="filterSelect__size">
        <p>Talles:</p>
        <label htmlFor="size--s" className="size">
          <input type="checkbox" id="size--s" />S
        </label>
        <label htmlFor="size--m" className="size">
          <input type="checkbox" id="size--m" />M
        </label>
        <label htmlFor="size--l" className="size">
          <input type="checkbox" id="size--l" />L
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
    </Fragment>
  );
};
export default Filter;
