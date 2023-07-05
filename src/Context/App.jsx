import React, { useState, createContext } from "react";
import Header from "./Header";
import About from "./About";
import Cart from "./Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";

export const ecommerceContext = createContext({});

export default function App() {
  const [cart, setCart] = useState([]);
  return (
    <>
      <BrowserRouter>
        <ecommerceContext.Provider value={{ cart, setCart }}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>
        </ecommerceContext.Provider>
      </BrowserRouter>
    </>
  );
}
