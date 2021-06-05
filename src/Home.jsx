import "./sass/pages/home.scss";
import hero from "./assets/images/heroimg.jpg";
import Category from "./component/Category";
import { categories } from "./const";
import Footer from "./component/Footer";
import Header from "./component/Header";
import CarouselOfferPrice from "./component/CarouselOfferPrice";

function Home() {
  return (
    <div>
      <Header />
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
        <Category
          image={categories[0].image}
          id={categories[0].id}
          name={categories[0].name}
          className={categories[0].cN}
        />
        <Category
          image={categories[1].image}
          id={categories[1].id}
          name={categories[1].name}
          className={categories[1].cN}
        />
        <Category
          image={categories[2].image}
          id={categories[2].id}
          name={categories[2].name}
          className={categories[2].cN}
        />
        <Category
          image={categories[3].image}
          id={categories[3].id}
          name={categories[3].name}
          className={categories[3].cN}
        />
      </div>
      <h2 className="title">Promos</h2>
      <div>
        <CarouselOfferPrice />
      </div>
      <h2 className="title">Productos</h2>
      <div className="products__container">
        {/* {products.forEach((props) => {
          console.log(props);
        })} */}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
