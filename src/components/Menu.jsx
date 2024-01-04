import React from "react";
import Pizzas from "./Pizzas";
import pizzaData from "../data";

const Menu = () => {
  const pizzas = pizzaData;
  // const pizzas = [];
  const pizzasNum = pizzas.length;
  return (
    <div className="menu">
      <h2>Our Menu</h2>

      {pizzasNum > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven. All organic, all delicious
          </p>
          <Pizzas />
        </>
      ) : (
        <p>Sorry, We are still workin on the menu. Please come back later.</p>
      )}
    </div>
  );
};

export default Menu;
