import React, { useContext, useEffect, useState } from "react";
import { ecommerceContext } from "./App";
import axios from "axios";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

function Products() {
  const { cart, setCart } = useContext(ecommerceContext);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((result) => {
      setProducts(result.data);
    });
  }, []);
  function addProductToCart(e, index) {
    e.preventDefault();
    setCart([...cart, products[index]]);
  }

  return (
    <section id="products" className="vspace hspace">
      <h2>Products</h2>
      <div className="products">
        {products.map((product, index) => {
          return (
            <div className="product" key={product.id}>
              <img src={product.image} alt={product.title} />
              <h4>{product.title}</h4>
              <h4>{product.price}</h4>
              <p>
                {cart.includes(product) ? (
                  <button className="addToCart">Added to Cart</button>
                ) : (
                  <a
                    href=""
                    className="addToCart"
                    onClick={(e) => addProductToCart(e, index)}
                  >
                    Add to Cart
                    <AddShoppingCartIcon />
                  </a>
                )}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
export default Products;
