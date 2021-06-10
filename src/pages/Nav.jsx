import React from "react";
import Home from "../Home";
import ProductsList from "./ProductsList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductDescription from "./ProductDescription";
import Layout from "../component/Layout";
// import { Provider } from "react-redux";
// import store from "./redux/store";

function Nav() {
  return (
    <Router>
      {/* <Provider store={store}> */}
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Productos" component={ProductsList} />
          <Route exact path="/Producto" component={ProductDescription} />
        </Switch>
      </Layout>
      {/* </Provider> */}
    </Router>
  );
}
export default Nav;
