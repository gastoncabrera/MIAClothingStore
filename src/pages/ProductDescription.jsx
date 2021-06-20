import React, { Fragment, useEffect, useState } from "react";
import "../sass/pages/productDescription.scss";
import Footer from "../component/Footer";
import { connect } from "react-redux";
import { getImageSource } from "../redux/actions/action";
import { productsPopulated } from "../const";

const ProductDescription = (props) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const { id } = props.match.params;
    const productFounded = productsPopulated.find((item) => item.id == id);
    setProduct(productFounded);
  }, []);

  const [quantity, setquantity] = useState(1);

  const [size, setsize] = useState({ size: `` });
  const chosenSize = (event) => {
    setsize({
      ...size,
      [event.target.name]: event.target.value,
    });
  };

  return product ? (
    <Fragment>
      <div className="container__shop">
        <div>
          <div className="image__container">
            <img src={product.images} alt="imagen de" />
          </div>
        </div>
        <div className="description__container">
          <h5 className="description__title">{product.title}</h5>
          <form>
            <div className="description__quantity">
              <button className="removeQuantity btn" disabled={quantity <= 1}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2rem"
                  height="2rem"
                  fill="currentColor"
                  className="bi bi-dash-circle"
                  viewBox="0 0 16 16"
                  onClick={() => setquantity(quantity - 1)}
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                </svg>
              </button>
              {quantity}
              <button className="addQuantity btn" disabled={quantity > 2}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2rem"
                  height="2rem"
                  fill="currentColor"
                  className="bi bi-plus-circle"
                  viewBox="0 0 16 16"
                  onClick={() => setquantity(quantity + 1)}
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg>
              </button>
            </div>
            <div>
              <div className="description__size">
                <div className="size">
                  <div className="size__buttonContainer">
                    <select onChange={chosenSize}>
                      {console.log(size)}
                      {product.sizes.map((props) => (
                        <option
                          className="size__button"
                          key={props.id}
                          value={props.size}
                          name="size"
                        >
                          {props.size}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <p className="description__price">
              Total:
              {product.offerPrice == false ? (
                <p>${product.normalPrice * quantity}</p>
              ) : (
                <p> ${product.offerPricePrice * quantity}</p>
              )}
            </p>
            <button
              className="description__addShop"
              type="submit"
              onClick={() => console.log({ quantity })}
            >
              Agregar al carrito
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </Fragment>
  ) : (
    <h1>error</h1>
  );
};
const mapStatetoPropers = (state) => {
  return {
    shop: state.shop,
    visibility: state.productVisibility,
  };
};
const mapDispatchToProps = {
  getImageSource,
};
export default connect(
  mapStatetoPropers,
  mapDispatchToProps
)(ProductDescription);
