import React from "react";
import "./Navbar.scss";
import logo from "../../logo.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <img alt="city-tour-logo" src={logo}></img>
      <ul className="nav-links">
        <li>
          <a href="/" className="nav-link">
            Welcome to city tours
          </a>
        </li>
      </ul>
    </nav>
  );
}
