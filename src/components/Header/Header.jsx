import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="header-container">
        <div className="logo">
          <h3>Café XYZ</h3>
        </div>
        <nav>
          <ul className="nav-links">
            <li>
              <a className="nav-link" href="home">
                HOME
              </a>
            </li>
            <li>
              <a className="nav-link" href="order">
                ORDER
              </a>
            </li>
            <li>
              <a className="nav-link" href="contact">
                CONTACT US
              </a>
            </li>
            <li>
              <a className="nav-link" href="checkout">
                CHECKOUT
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <section className="hero">
        <div className="hero-left">
          <div className="hero-text">
            <h1>
              Thanks for your support we are open and looking forward to have
              you guys.
            </h1>
          </div>
          <div className="call-to-action">
            <button className="cta-btn">PLACE AND ORDER</button>
          </div>
        </div>
        <div className="hero-right">
          <div className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active"></div>
              <div className="carousel-item"></div>
              <div className="carousel-item"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
