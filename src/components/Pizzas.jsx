import React from "react";
import Pizza from "./Pizzaitem";
import pizzaData from "../data";

function Pizzas() {
  return (
    <ul className="pizzas">
      {pizzaData.map((pizza) => (
        <Pizza pizzaObj={pizza} />
      ))}
    </ul>
  );
}

export default Pizzas;
