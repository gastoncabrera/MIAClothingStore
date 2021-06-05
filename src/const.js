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
    title: "Camisa Clarkia VCP",
    slug: "camisa-clarkia-vcp",
    normalPrice: "1800",
    offerPrice: null,
    images:
      "https://cdn.pixabay.com/photo/2017/11/23/03/17/christmas-2971961_960_720.jpg",

    sizes: [`${sizes[0].size} ${sizes[1].size} ${sizes[2].size}`],
    // categories: [1],
    // colors: [1, 2],
  },
  {
    id: 3,
    title: "Remera Lisa",
    slug: "camisa-clarkia-vcp",
    normalPrice: "1100",
    offerPrice: null,
    images:
      "https://images.pexels.com/photos/2220316/pexels-photo-2220316.jpeg?cs=srgb&dl=pexels-jonathan-faria-2220316.jpg&fm=jpg",

    sizes: [`${sizes[0].size}`],
    // categories: 1,
    // colors: 2,
  },
  {
    id: 4,
    title: "Remera Lisa",
    slug: "camisa-clarkia-vcp",
    normalPrice: "1100",
    offerPrice: null,
    images:
      "https://images.pexels.com/photos/2220316/pexels-photo-2220316.jpeg?cs=srgb&dl=pexels-jonathan-faria-2220316.jpg&fm=jpg",

    sizes: [`${sizes[0].size}`],
    // categories: 1,
    // colors: 2,
  },
  {
    id: 2,
    title: "Remera Lisa",
    slug: "camisa-clarkia-vcp",
    normalPrice: "1100",
    offerPrice: null,
    images:
      "https://images.pexels.com/photos/2220316/pexels-photo-2220316.jpeg?cs=srgb&dl=pexels-jonathan-faria-2220316.jpg&fm=jpg",

    sizes: [`${sizes[0].size}`],
    // categories: 1,
    // colors: 2,
  },
];
export { products, categories, colors, sizes };
