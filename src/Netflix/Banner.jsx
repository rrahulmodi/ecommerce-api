import React, { useState } from "react";
import Emoji from "./images/Netflix-avatar.png";
import Logo from "./images/Netflix_2015_logo.svg.png";
import "./app.css";

function Banner() {
  const [headerDark, setHeaderDark] = useState(false);

  window.onscroll = () => {
    if (window.scrollY > 350) {
      setHeaderDark(true);
    } else {
      setHeaderDark(false);
    }
  };

  return (
    <nav className={headerDark ? "dark" : ""}>
      <img className="logo" src={Logo} alt="" />
      <img className="emoji" src={Emoji} alt="" />
    </nav>
  );
}

export default Banner;
