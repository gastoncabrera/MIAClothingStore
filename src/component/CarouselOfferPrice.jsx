import React, { Component } from "react";
import Carousel from "react-elastic-carousel";
import Product from "./product";
import { products } from "../const";

class CarouselOfferPrice extends Component {
  state = {
    items: [
      {
        id: 1,
        title: (
          <Product
            image={products[0].images}
            name={products[0].name}
            normalPrice={products[0].normalPrice}
            size={products[0].sizes}
          />
        ),
      },
      {
        id: 2,
        title: (
          <Product
            image={products[0].images}
            name={products[0].name}
            normalPrice={products[0].normalPrice}
            size={products[0].sizes}
          />
        ),
      },
      {
        id: 3,
        title: (
          <Product
            image={products[0].images}
            name={products[0].name}
            normalPrice={products[0].normalPrice}
            size={products[0].sizes}
          />
        ),
      },
      {
        id: 4,
        title: (
          <Product
            image={products[0].images}
            name={products[0].name}
            normalPrice={products[0].normalPrice}
            size={products[0].sizes}
          />
        ),
      },
      {
        id: 5,
        title: (
          <Product
            image={products[0].images}
            name={products[0].name}
            normalPrice={products[0].normalPrice}
            size={products[0].sizes}
          />
        ),
      },
    ],
  };

  render() {
    const breakPoints = [
      { width: 500, itemsToShow: 1 },
      { width: 600, itemsToShow: 2 },
      { width: 800, itemsToShow: 3 },
      { width: 1200, itemsToShow: 4 },
    ];
    const { items } = this.state;
    return (
      <Carousel breakPoints={breakPoints}>
        {items.map((item) => (
          <div key={item.id}>{item.title}</div>
        ))}
      </Carousel>
    );
  }
}
export default CarouselOfferPrice;
