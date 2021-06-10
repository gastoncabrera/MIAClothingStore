import React from "react";
import { Fragment } from "react";
import { products } from "../const";
import Product from "./product";

const Prueba = () => {
  const productsFilter = products.filter(
    (props) => props.categories == "Cinturon"
  );
  const total = productsFilter.map((x) => x.title);
  console.log(total);
  return (
    <Fragment>
      <div>
        {productsFilter.map((props) => (
          <Product products={props} key={props.id} />
        ))}
      </div>
    </Fragment>
  );
};
export default Prueba;
