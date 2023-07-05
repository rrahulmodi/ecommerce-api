import React, { useState } from "react";
import Logo from "./images2/logo.svg";
import CloseIcon from "@mui/icons-material/Close";

function header() {
  const [menuOpen, setMenuOpen] = useState(false);
  function toggleMenu(e) {
    e.preventDefault();
    menuOpen ? setMenuOpen(false) : setMenuOpen(true);
  }
  return (
    <header>
      <div className="header-menu">
        <img className="logo" src={Logo} alt="" />
        <ul className="menu-1">
          <li>
            <a href="">Model S</a>
          </li>
          <li>
            <a href="">Model 3</a>
          </li>
          <li>
            <a href="">Model X</a>
          </li>
          <li>
            <a href="">Model Y</a>
          </li>
          <li>
            <a href="">Solar Roof</a>
          </li>
          <li>
            <a href="">Solar Panels</a>
          </li>
        </ul>

        <ul className="menu-2">
          <li>
            <a href="">Shop</a>
          </li>
          <li>
            <a href="">Account</a>
          </li>
          <li onClick={toggleMenu}>
            <a href="">Menu</a>
          </li>
        </ul>
        <ul className="sidebar" style={{ right: menuOpen ? 0 : "-250px" }}>
          <CloseIcon onClick={toggleMenu} className="cross" />
          <li>
            <a href="">Model S</a>
          </li>
          <li>
            <a href="">Model 3</a>
          </li>
          <li>
            <a href="">Model X</a>
          </li>
          <li>
            <a href="">Model Y</a>
          </li>
          <li>
            <a href="">Solar Roof</a>
          </li>
          <li>
            <a href="">Solar Panels</a>
          </li>
          <li>
            <a href="">Solar Roof</a>
          </li>
          <li>
            <a href="">Solar Panels</a>
          </li>
          <li>
            <a href="">Solar Roof</a>
          </li>
          <li>
            <a href="">Solar Panels</a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default header;
