import React, { useState } from "react";
// import { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Buys from "./Buys";

function Header({ buy, cart }) {
  const [sidebar, setsidebar] = useState(false);
  const showSidebar = () => setsidebar(!sidebar);

  const [shop, setshop] = useState(false);
  const showShop = () => setshop(!shop);
  return (
    <div className="header">
      <div className="header__container container">
        <div className="header__menuburguer">
          <svg
            onClick={showSidebar}
            xmlns="http://www.w3.org/2000/svg"
            width="2rem"
            height="2rem"
            fill="white"
            className="icon-list"
            viewBox="0 0 16 16"
          >
            <path
              fill="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </div>
        <p className="header__img">
          MIA <span>Clothing Store</span>
        </p>
        <div className="header__card">
          <svg
            onClick={showShop}
            xmlns="http://www.w3.org/2000/svg"
            width="1.5rem"
            height="1.5rem"
            fill="currentColor"
            className="shopping-cart"
            viewBox="0 0 16 16"
          >
            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
          </svg>
          <div className="header__quantityShopping">{buy.cuantity}</div>
          <div
            className={sidebar ? `header__sidebarOpen` : `header__sidebarClose`}
          >
            <div onClick={showSidebar} className="close">
              X
            </div>
            <div className="navbar">
              <Link to="/">Inicio</Link>
              <Link to="/productos">Productos</Link>
            </div>
          </div>
        </div>
        <div
          className={
            shop ? `container__cardShopOPen` : `container__cardShopClose`
          }
        >
          <div className="shop__buttonClose" onClick={showShop}>
            X
          </div>
          <div className="container__buys">
            {cart.map((props) => (
              <Buys products={props.products} key={props.products.id} />
            ))}
          </div>
        </div>
      </div>
      {console.log(buy)}
    </div>
  );
}
const mapStatetoPropers = (state) => {
  return {
    cart: state.shop,
    buy: state.default_clothing_shop,
  };
};
// const mapStatetoPropersShop = (state) => {
//   return {
//     shop: state.shop,
//   };
// };
export default connect(mapStatetoPropers)(Header);
// , mapStatetoPropersShop
