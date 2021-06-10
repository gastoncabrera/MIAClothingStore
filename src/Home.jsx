import "./sass/pages/home.scss";
import hero from "./assets/images/heroimg.jpg";
import Category from "./component/Category";
import { categories, products } from "./const";
import Footer from "./component/Footer";
import Header from "./component/Header";
import CarouselOfferPrice from "./component/CarouselOfferPrice";
import Product from "./component/product";
import { Provider } from "react-redux";
import store from "./redux/store";

function Home() {
  return (
    <Provider store={store}>
      <Header />
      <div>
        <div className="hero">
          <div className="hero__container">
            <img
              src={hero}
              className="hero__img"
              alt="imagen de la MIA Clothing Store"
            ></img>
            <div className="hero__description">
              <p>ss 2021</p>
              <h1>Summer Night</h1>
            </div>
          </div>
        </div>
        <div className="main">
          {/* {categories.map((props) => (
            // <Category category={props} key={props.id} />
          ))} */}
        </div>
        <h2 className="title">Promos</h2>
        <div>
          <CarouselOfferPrice />
        </div>
        <h2 className="title">Productos</h2>
        <div className="productsHome__container">
          {products.map((props) => (
            <Product products={props} key={props.id} />
          ))}
        </div>
        {/* <Footer /> */}
      </div>
    </Provider>
  );
}

export default Home;
