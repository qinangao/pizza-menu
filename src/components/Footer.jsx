import React from "react";
const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  //   if (hour >= openHour && hour <= closeHour) {
  //     alert("We are currently open.");
  //   } else {
  //     alert("We are currently closed.");
  //   }

  return (
    <footer className="footer ">
      {new Date().toLocaleTimeString()} We are currently{" "}
      {isOpen ? "open" : "closed"}.
    </footer>
  );
};
export default Footer;
