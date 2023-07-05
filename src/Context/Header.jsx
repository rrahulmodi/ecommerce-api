import React, { useContext, useState } from "react";
import { ecommerceContext } from "./App";
import { Link } from "react-router-dom";

function Header() {
  const { cart } = useContext(ecommerceContext);
  const [stickyHeader, setStickyHeader] = useState(false);

  window.onscroll = () => {
    if (window.scrollY > 200) setStickyHeader(true);
    else setStickyHeader(false);
  };

  return (
    <header className={stickyHeader ? "sticky" : ""}>
      <h1>
        <Link to="/">Ecommerce</Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/cart">
              Cart<span>{cart.length}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
