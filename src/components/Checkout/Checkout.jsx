import React from "react";
import Header from "../Header/Header";

const Checkout = ({ cart }) => {
  console.log(cart);

  return (
    <>
      <Header />
      <div className="container">
        <div className="payment-info"></div>
        <div className="order">
          {cart.map((item) => (
            <>
              <h1>{item.name}</h1>
              <h3>{item.price}</h3>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Checkout;
