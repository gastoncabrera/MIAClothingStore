import React from "react";
import { connect } from "react-redux";
import Product from "./product";

const Shop = ({ shop }) => {
  console.log(shop);
  return (
    <div>
      {shop.map((props) => (
        <Product products={props.products} key={props.products.id} />
      ))}
    </div>
  );
};
const mapStatetoPropersShop = (state) => {
  return {
    shop: state.shop,
  };
};
export default connect(mapStatetoPropersShop)(Shop);
