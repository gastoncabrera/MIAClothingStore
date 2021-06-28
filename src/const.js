const default_clothing_shop = {
  cuantity: 0,
};
const categories = [
  {
    id: 1,
    name: "jean",
    image:
      "https://d2r9epyceweg5n.cloudfront.net/stores/976/887/themes/idea/img-702599833-1599663591-9c2630015696498f6b789598245fa0471599663591-1024-1024.jpg?1321270398",
    cN: "img-1",
  },
  {
    id: 2,
    name: "remera",
    image:
      "https://cdn.pixabay.com/photo/2017/11/23/03/17/christmas-2971961_960_720.jpg",
    cN: "img-2",
  },
  {
    id: 3,
    name: "bluza",
    image:
      "https://cdn.pixabay.com/photo/2016/05/22/18/55/woman-1409015_960_720.jpg",
    cN: "img-3",
  },
  {
    id: 4,
    name: "cinturon",
    image:
      "https://images.pexels.com/photos/4906212/pexels-photo-4906212.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    cN: "img-4",
  },
];

const colors = [
  {
    id: 1,
    name: "Azul",
    color: "#dddeee",
  },
  {
    id: 2,
    name: "blanco",
    color: "#fff",
  },
];

const sizes = [
  {
    id: 1,
    size: "S",
  },
  {
    id: 2,
    size: "M",
  },
  {
    id: 3,
    size: "L",
  },
];
const products = [
  {
    id: 1,
    title: "Jeans azul",
    slug: "camisa-clarkia-vcp",
    normalPrice: 1800,
    offerPricePrice: 1300,
    offerPrice: true,
    images:
      "https://i.ibb.co/Q9CwrCk/Whats-App-Image-2021-06-14-at-20-51-00.jpg",

    sizes: [1, 2],
    categories: [1],
    colors: [2],
  },
  {
    id: 2,
    title: "Jeans rojo",
    slug: "camisa-clarkia-vcp",
    normalPrice: 1100,
    offerPricePrice: 990,
    offerPrice: true,
    images:
      "https://i.ibb.co/f08f2Gk/Whats-App-Image-2021-06-14-at-20-51-01.jpg",

    sizes: [2],
    categories: [1],
    colors: [2],
  },
  {
    id: 3,
    title: "Cinturon clasico",
    slug: "camisa-clarkia-vcp",
    normalPrice: 700,
    offerPricePrice: 630,
    offerPrice: true,
    images: "https://i.ibb.co/5WKbbjQ/editado.jpg",

    sizes: [1],
    categories: [4],
    colors: [2],
  },
  {
    id: 4,
    title: "Cinturon moderno",
    slug: "Cinturon moderno",
    normalPrice: 900,
    offerPricePrice: null,
    offerPrice: false,
    images:
      "https://images.pexels.com/photos/2343826/pexels-photo-2343826.jpeg?cs=srgb&dl=pexels-brianna-amick-2343826.jpg&fm=jpg",

    sizes: [1],
    categories: [4],
    colors: [2],
  },
  {
    id: 5,
    title: "Remera Blanca",
    slug: "Remera Blanca",
    normalPrice: 900,
    offerPricePrice: null,
    offerPrice: false,
    images:
      "https://images.pexels.com/photos/6833457/pexels-photo-6833457.jpeg?cs=srgb&dl=pexels-dimitry-zub-6833457.jpg&fm=jpg",

    sizes: [1],
    categories: [2],
    colors: [2],
  },
  {
    id: 6,
    title: "Remera Blanca",
    slug: "Remera Blanca",
    normalPrice: 900,
    offerPricePrice: null,
    offerPrice: false,
    images:
      "https://images.pexels.com/photos/6833457/pexels-photo-6833457.jpeg?cs=srgb&dl=pexels-dimitry-zub-6833457.jpg&fm=jpg",

    sizes: [1],
    categories: [2],
    colors: [2],
  },
];
const productVisibility = [];
const productsPopulated = products.map((productItem) => {
  const _categories = categories.filter((categoryItem) =>
    productItem.categories.includes(categoryItem.id)
  );
  const _colors = colors.filter((colorItem) =>
    productItem.colors.includes(colorItem.id)
  );
  const _sizes = sizes.filter((sizeItem) =>
    productItem.sizes.includes(sizeItem.id)
  );

  return {
    ...productItem,
    categories: _categories,
    colors: _colors,
    sizes: _sizes,
  };
});
export {
  products,
  categories,
  colors,
  sizes,
  default_clothing_shop,
  productVisibility,
  productsPopulated,
};
