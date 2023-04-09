import React, { useState } from "react";
import "./Home.css";
import { useLoaderData } from "react-router-dom";
import TShirt from "../TShirt/TShirt";
import Cart from "../Cart/Cart";

const Home = () => {
  const tshirts = useLoaderData();
  const [cart, setCart] = useState([]);

  const handleAddToCart = (tshirt) => {
      const newCart = [...cart, tshirt];
      setCart(newCart);
      console.log(cart);
  };
  const handleRemoveFromCart = (tshirt) => {
    const newCart = [...cart];
    const index = newCart.indexOf(tshirt);
    newCart.splice(index,1);
    setCart(newCart);
  }
// key={tshirt["_id"]}
  return (
    <div className="home-container">
      <div className="t-shirts-container">
        {tshirts.map((tshirt) => (
          <TShirt
            tshirt={tshirt}
            handleAddToCart={handleAddToCart}
          ></TShirt>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart = {cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
      </div>
    </div>
  );
};

export default Home;
