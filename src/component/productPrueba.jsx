import React from "react";
import { productsPopulated } from "../const";
import Product from "./product";

const ProductPrueba = (props) => {
  const category = props.props.Category;
  const productsFilter = productsPopulated.filter(
    (props) => props.categories[0].name === category
  );

  return (
    <>
      {category ? (
        <>
          {productsFilter.map((props) => (
            <Product product={props} key={props.id} />
          ))}
        </>
      ) : (
        <>
          {productsPopulated.map((props) => (
            <Product product={props} key={props.id} />
          ))}
        </>
      )}
    </>
  );
};
export default ProductPrueba;
