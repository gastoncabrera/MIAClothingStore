import React, { useState } from "react";

const ProbarAcciones = () => {
  const [fruit, setfruit] = useState("");
  console.log(fruit);
  return (
    <>
      <select
        onChange={(e) => {
          const selecFruit = e.target.value;
          setfruit(selecFruit);
        }}
      >
        <option value="manzana">manzana</option>
        <option value="pera">pera</option>
        <option value="naranja">naranja</option>
      </select>
    </>
  );
};
export default ProbarAcciones;
