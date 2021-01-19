import React from "react";
import Header from "../Header/Header";
import Product from "./Product/Product";

const OrderPage = ({ products, addToCart }) => {
  return (
    <>
      <Header />
      <div className="products">
        {products.map((product) => (
          <Product addToCart={addToCart} key={product._id} product={product} />
        ))}
      </div>
    </>
  );
};

export default OrderPage;
