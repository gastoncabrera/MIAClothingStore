import React from "react";
import Home from "../Home";
import ProductsList from "./ProductsList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductDescription from "./ProductDescription";
import Layout from "../component/Layout";
import Shop from "../component/Shop";

function Nav() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/productos" component={ProductsList} />
          <Route exact path="/producto" component={ProductDescription} />
          <Route exact path="/shop" component={Shop} />
        </Switch>
      </Layout>
    </Router>
  );
}
export default Nav;
