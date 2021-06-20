import React from "react";
import { categories, products, productsPopulated } from "../const";
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
            <Product product={props} />
          ))}
        </>
      ) : (
        <>
          {productsPopulated.map((props) => (
            <Product product={props} />
          ))}
        </>
      )}
    </>
  );
};
export default ProductPrueba;
