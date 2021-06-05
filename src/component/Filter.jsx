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
        <label for="size--s" className="size">
          <input type="checkbox" id="size--s" />S
        </label>
        <label for="size--m" className="size">
          <input type="checkbox" id="size--m" />M
        </label>
        <label for="size--l" className="size">
          <input type="checkbox" id="size--l" />L
        </label>
      </div>
      <div className="filterSelect__color">
        <p>Colores:</p>
        <label for="color--white" className="color">
          <input type="checkbox" id="color--white" />
          Blanco
        </label>
        <label for="color--blue" className="color">
          <input type="checkbox" id="color--blue" />
          Azul
        </label>
        <label for="color--black" className="color">
          <input type="checkbox" id="color--black" />
          Negro
        </label>
      </div>
    </Fragment>
  );
};
export default Filter;
