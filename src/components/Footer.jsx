import React from "react";
const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer ">
      {isOpen ? (
        <div className="order">
          <p>We are open until {closeHour}:00. Come visit us or order online</p>
          <button className="btn">Order</button>
        </div>
      ) : (
        <p>
          Sorry, we are currently closed. Welcome to vist us between {openHour}
          :00 to {closeHour}:00
        </p>
      )}
    </footer>
  );
};
export default Footer;
