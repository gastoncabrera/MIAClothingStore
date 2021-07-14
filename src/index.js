// libraries
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// components
import Layout from "./component/Layout";

// pages
import ProductDescription from "./pages/ProductDescription";
import ProductsList from "./pages/ProductsList";
import Home from "./pages/Home";

// store
import store from "./store";

// reports
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Route exact path="/" component={Home} />
          <Route exact path="/productos" component={ProductsList} />
          <Route exact path="/productos/:id" component={ProductDescription} />
        </Layout>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
