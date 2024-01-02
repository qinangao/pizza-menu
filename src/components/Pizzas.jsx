import React from "react";
import Pizza from "./Pizzaitem";
import pizzaData from "../data";

function Pizzas() {
  return (
    <div className="pizzas">
      {pizzaData.map((pizza) => (
        <Pizza pizzaObj={pizza} />
      ))}
    </div>
  );
}

export default Pizzas;
