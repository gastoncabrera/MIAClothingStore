import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./Home";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductsList from "./pages/ProductsList";
import ProductDescription from "./pages/ProductDescription";

ReactDOM.render(
  <React.StrictMode>
    <ProductDescription />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
