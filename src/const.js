const categories = [
  {
    id: 1,
    name: "Jean",
    image:
      "https://d2r9epyceweg5n.cloudfront.net/stores/976/887/themes/idea/img-702599833-1599663591-9c2630015696498f6b789598245fa0471599663591-1024-1024.jpg?1321270398",
    cN: "img-1",
  },
  {
    id: 2,
    name: "Remera",
    image:
      "https://cdn.pixabay.com/photo/2017/11/23/03/17/christmas-2971961_960_720.jpg",
    cN: "img-2",
  },
  {
    id: 3,
    name: "Bluza",
    image:
      "https://cdn.pixabay.com/photo/2016/05/22/18/55/woman-1409015_960_720.jpg",
    cN: "img-3",
  },
  {
    id: 4,
    name: "Cinturon",
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
      "https://cdn.pixabay.com/photo/2017/11/23/03/17/christmas-2971961_960_720.jpg",

    sizes: [`${sizes[0].size} ${sizes[1].size} ${sizes[2].size}`],
    categories: [`${categories[0].name}`],
    colors: [`${colors[1].name}`],
  },
  {
    id: 2,
    title: "Jeans rojo",
    slug: "camisa-clarkia-vcp",
    normalPrice: 1100,
    offerPricePrice: 990,
    offerPrice: true,
    images:
      "https://images.pexels.com/photos/2220316/pexels-photo-2220316.jpeg?cs=srgb&dl=pexels-jonathan-faria-2220316.jpg&fm=jpg",

    sizes: [`${sizes[0].size}`],
    categories: [`${categories[0].name}`],
    // colors: 2,
  },
  {
    id: 3,
    title: "Cinturon clasico",
    slug: "camisa-clarkia-vcp",
    normalPrice: 700,
    offerPricePrice: 630,
    offerPrice: true,
    images:
      "https://images.pexels.com/photos/1564149/pexels-photo-1564149.jpeg?cs=srgb&dl=pexels-chelsi-peter-1564149.jpg&fm=jpg",

    sizes: [`${sizes[0].size}`],
    categories: [`${categories[3].name}`],
    colors: [`${colors[1].name}`],
  },
  {
    id: 4,
    title: "Cinturon moderno",
    slug: "Cinturon moderno",
    normalPrice: 900,
    offerPrice: null,
    images:
      "https://images.pexels.com/photos/2343826/pexels-photo-2343826.jpeg?cs=srgb&dl=pexels-brianna-amick-2343826.jpg&fm=jpg",

    sizes: [`${sizes[0].size}`],
    categories: [`${categories[3].name}`],
    colors: [`${colors[1].name}`],
  },
  {
    id: 5,
    title: "Remera Blanca",
    slug: "Remera Blanca",
    normalPrice: 900,
    offerPrice: null,
    images:
      "https://images.pexels.com/photos/6833457/pexels-photo-6833457.jpeg?cs=srgb&dl=pexels-dimitry-zub-6833457.jpg&fm=jpg",

    sizes: [`${sizes[0].size}`],
    categories: [`${categories[1].name}`],
    colors: [`${colors[1].name}`],
  },
  {
    id: 6,
    title: "Remera Blanca",
    slug: "Remera Blanca",
    normalPrice: 900,
    offerPrice: null,
    images:
      "https://images.pexels.com/photos/6833457/pexels-photo-6833457.jpeg?cs=srgb&dl=pexels-dimitry-zub-6833457.jpg&fm=jpg",

    sizes: [`${sizes[1].size}`],
    categories: [`${categories[1].name}`],
    colors: [`${colors[1].name}`],
  },
];
export { products, categories, colors, sizes };
