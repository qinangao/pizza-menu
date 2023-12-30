import React from "react";

function Pizza() {
  return <h2>Pizza</h2>;
}

const Menu = () => {
  return (
    <div>
      <h2>Our Menu</h2>
      <p>
        Authentic Italian cuisine. 6 creative dishes to choose from. All from
        our stone oven. All organic, all delicious
      </p>
      <Pizza />
      <Pizza />
      <Pizza />
    </div>
  );
};

export default Menu;
