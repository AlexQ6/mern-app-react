import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import OrderPage from "./components/OrderPage/OrderPage";
import ContactPage from "./components/ContactPage/ContactPage";
import Checkout from "./components/Checkout/Checkout";
import CMSDashboard from "./components/CMS/CMSDashboard";
import ProductCMS from "./components/CMS/Product/ProductCMS";
import "./App.css";
import NewProduct from "./components/CMS/Product/NewProduct";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const getProducts = async () => {
    const response = await fetch("https://thecafeapp.herokuapp.com/products");
    const APIProducts = await response.json();
    setProducts(APIProducts);
  };

  const addToCart = (item) => {
    const updatedCart = [...cart, item ];
    console.log("Updated Cart: ", updatedCart)
    console.log("Cart: ", cart)
    setCart(updatedCart);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Router>
        <Route path="/" exact render={(props) => <HomePage {...props} />} />
        <Route
          path="/order"
          render={(props) => (
            <OrderPage {...props} products={products} addToCart={addToCart} />
          )}
        />
        <Route path="/contact" render={(props) => <ContactPage {...props} />} />
        <Route path="/login" />
        <Route
          path="/checkout"
          render={(props) => <Checkout cart={cart} {...props} />}
        />
        <Route path="/cms/dashboard" render={props => <CMSDashboard { ...props } /> } />
        <Route path="/cms/products" exact render={props => <ProductCMS products={products} { ...props } /> } />
        <Route path="/cms/products/new" render={props => <NewProduct { ...props } />} />

      </Router>
    </>
  );
};

export default App;
