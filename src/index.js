import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./pages/Nav";
import Home from "./Home";

import { createStore } from "redux";
import reducer from "./redux/reducer/reducer";
import { Provider } from "react-redux";
import {
  products,
  categories,
  colors,
  sizes,
  shop,
  default_clothing_shop,
} from "./const";

const store = createStore(reducer, {
  products,
  categories,
  colors,
  sizes,
  shop,
  default_clothing_shop,
});

export default store;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Nav />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
