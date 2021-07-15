import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { addCartItem, updateCartItem, selectCarts } from "./../store/modules/cart";
import { productsPopulated, maxProductStock } from "../const";

import Footer from "../component/Footer";
import "../sass/pages/productDescription.scss";

const ProductDescription = (props) => {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [sizeId, setSizeId] = useState(null);

  const dispatch = useDispatch();
  const carts = useSelector(selectCarts);

  // obtener producto
  useEffect(() => {
    const { id } = props.match.params;
    const productFounded = productsPopulated.find((item) => item.id === parseInt(id));

    setProduct(productFounded);

    // if (productFounded) {
    //   setSizeId(productFounded.sizes[0].id);
    // }
  }, [props.match.params]);

  const handleAddShop = (event) => {
    event.preventDefault();

    if (!sizeId || !quantity) {
      return;
    }

    const existCartItem = carts.some(
      (cartItem) => cartItem.sizeId === sizeId && cartItem.productId === product.id
    );

    if (existCartItem) {
      dispatch(updateCartItem({ quantity, sizeId, productId: product.id }));
      return;
    }

    dispatch(addCartItem({ quantity, sizeId, productId: product.id }));
  };

  return product ? (
    <Fragment>
      <div className="container__shop">
        <div>
          <div className="image__container">
            <img src={product.images} alt={`imagen de ${product.title}`} />
          </div>
        </div>

        <div className="description__container">
          <h5 className="description__title">{product.title}</h5>

          <form onSubmit={handleAddShop}>
            <div className="description__quantity">
              <button
                className="removeQuantity btn"
                disabled={quantity <= 1}
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2rem"
                  height="2rem"
                  fill="currentColor"
                  className="bi bi-dash-circle"
                  viewBox="0 0 16 16"
                  onClick={() => setQuantity(quantity - 1)}
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                </svg>
              </button>

              {quantity}

              <button
                className="addQuantity btn"
                disabled={quantity >= maxProductStock}
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2rem"
                  height="2rem"
                  fill="currentColor"
                  className="bi bi-plus-circle"
                  viewBox="0 0 16 16"
                  onClick={() => setQuantity(quantity + 1)}
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
                    {product.sizes.map((sizeItem) => (
                      <label key={sizeItem.id}>
                        <input
                          onChange={() => setSizeId(sizeItem.id)}
                          type="radio"
                          name="size"
                          value={sizeItem.id}
                        />

                        {sizeItem.size}
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <p className="description__price">
              Total:
              {product.offerPrice === false
                ? product.normalPrice * quantity
                : product.offerPricePrice * quantity}
            </p>

            <button className="description__addShop" type="submit">
              Agregar al carrito
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </Fragment>
  ) : (
    <h1>Producto no encontrado</h1>
  );
};

export default ProductDescription;
