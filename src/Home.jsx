import "./sass/pages/home.scss";
import hero from "./assets/images/heroimg.jpg";
import Category from "./component/Category";
import Footer from "./component/Footer";
import CarouselOfferPrice from "./component/CarouselOfferPrice";
import Product from "./component/product";
import { Provider } from "react-redux";
import store from "./index";
import { categories, productsPopulated } from "./const";
function Home() {
  return (
    <Provider store={store}>
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
          {categories.map((props) => (
            <Category category={props} key={props.id} />
          ))}
        </div>
        <h2 className="title">Promos</h2>
        <div>
          <CarouselOfferPrice />
        </div>
        <h2 className="title">Productos</h2>
        <div className="productsHome__container">
          {productsPopulated.map((product) => (
            <Product product={product} key={product.id} isNormalPrice />
          ))}
        </div>
        <Footer />
      </div>
    </Provider>
  );
}

export default Home;
