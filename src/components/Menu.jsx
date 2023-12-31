import React from "react";
import Pizzas from "./Pizzas";

const Menu = () => {
  return (
    <div className="menu">
      <h2>Our Menu</h2>
      <p>
        Authentic Italian cuisine. 6 creative dishes to choose from. All from
        our stone oven. All organic, all delicious
      </p>
      <Pizzas />
    </div>
  );
};

export default Menu;
