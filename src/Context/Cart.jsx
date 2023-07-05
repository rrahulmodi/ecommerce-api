import React, { useContext, useState } from "react";
import { ecommerceContext } from "./App";
import { Link } from "react-router-dom";

function Cart() {
  const { cart } = useContext(ecommerceContext);

  const [count, setCount] = useState(1);
  function incrementCounter() {
    setCount(count + 1);
  }
  function decrementCounter() {
    setCount(count - 1);
  }
  const [perItem, perItemTotal] = useState();

  function totalCalc() {
    perItemTotal(item.price * count);
  }
  // const subtotal = cart.reduce((total, count) => {
  //   return total + count;
  // }, 0);

  // console.log("sub", subtotal);

  //   function stopLoad(e) {
  //     e.preventDefault();
  //   }

  return (
    <div className="products">
      {cart.map((item) => {
        return (
          <div className="product" key={item.id}>
            <img src={item.image} alt={item.title} />
            <h4>{item.title}</h4>
            <button onClick={incrementCounter}>+</button>
            <p>{count}</p>
            <button onClick={decrementCounter}>-</button>
            <h4>{totalCalc}</h4>
          </div>
        );
      })}
      <div>
        <h4>
          total price :{cart.reduce((total, perItem) => total + perItem, 0)}
        </h4>
      </div>
    </div>
  );
}

export default Cart;
