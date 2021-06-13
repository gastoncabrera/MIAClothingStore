import React from "react";
import "../sass/components/buys.scss";

const Buys = ({ products }) => {
  return (
    <>
      <div className="container">
        <h1 className="title">{products.title}</h1>
        <img className="images" src={products.images} alt="producto" />
        <p className="price">{products.normalPrice}</p>
      </div>
    </>
  );
};
export default Buys;
