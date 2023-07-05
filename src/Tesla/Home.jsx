import React from "react";
import Header from "./Header";
import "./tesla.css";
import Section1 from "./section1";
import Audio from "./images2/audio.jpg";
import Connected from "./images2/connected.jpg";
import Accessories from "./images2/accessories.jpg";
import Game from "./images2/game.jpg";
import Model3 from "./images2/model-3.jpg";
import ModelX from "./images2/model-x.jpg";

function Home() {
  return (
    <>
      <Header />
      <Section1
        model="Model S"
        desc="Order Online for touchless delivery"
        btn1="Custom Order"
        btn2="Existing Inventory"
        arrow={true}
        backgroundImg={Model3}
      />
      <Section1
        model="Model 3"
        desc="Order Online for touchless delivery"
        btn1="Custom Order"
        btn2="Existing Inventory"
        backgroundImg={Connected}
      />
      <Section1
        model="Model X"
        desc="Order Online for touchless delivery"
        btn1="Custom Order"
        btn2="Existing Inventory"
        backgroundImg={Accessories}
      />
      <Section1
        model="Model Y"
        desc="Order Online for touchless delivery"
        btn1="Custom Order"
        btn2="Existing Inventory"
        backgroundImg={Game}
      />
      <Section1
        model="Solar Roof"
        desc="Order Online for touchless delivery"
        btn1="Custom Order"
        btn2="Existing Inventory"
        backgroundImg={Audio}
      />
      <Section1
        model="Solar Panels"
        desc="Order Online for touchless delivery"
        btn1="Custom Order"
        btn2="Existing Inventory"
        backgroundImg={ModelX}
      />
    </>
  );
}

export default Home;
