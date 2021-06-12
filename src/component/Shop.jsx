// import React, { useState } from "react";
// import { connect } from "react-redux";
// import Product from "./product";

// // const Slide = styled.div`
// //   color: ${({ color }) => (color ? "red" : "black")};
// // `;

// const Shop = ({ shop }) => {
//   // const [color, setcolor] = useState(false);
//   // const showColor = () => setcolor(!color);
//   // console.log(showColor);
//   // console.log(color);
//   return (
//     <div>
//       {shop.map((props) => (
//         <Product products={props.products} key={props.products.id} />
//       ))}
//       {/* <div>
//         <Slide color={color}>
//           <h1 className="pruebacolor">hola</h1>
//         </Slide>
//         <button className="botoncolor" onClick={showColor}>
//           Cambiar de color
//         </button>
//       </div> */}
//     </div>
//   );
// };
// const mapStatetoPropersShop = (state) => {
//   return {
//     shop: state.shop,
//   };
// };
// export default connect(mapStatetoPropersShop)(Shop);
