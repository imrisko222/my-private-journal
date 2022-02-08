import React from "react";
import "../styles/Navbar.css";

export default function Navbar(props) {
  return (
    <nav className="navContainer">
      <img src={props.img} alt="" />
      <p>my travel journal</p>
    </nav>
  );
}
