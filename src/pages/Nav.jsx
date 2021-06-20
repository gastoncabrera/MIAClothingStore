import React from "react";
import Home from "../Home";
import ProductsList from "./ProductsList";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProductDescription from "./ProductDescription";
import Layout from "../component/Layout";
import Prueba from "../component/prueba";

function Nav() {
  return (
    <Router>
      <Layout>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/productos" component={ProductsList} />
        <Route exact path="/producto/:id" component={ProductDescription} />
        <Route exact path="/prueba" component={Prueba} />
      </Layout>
    </Router>
  );
}
export default Nav;
