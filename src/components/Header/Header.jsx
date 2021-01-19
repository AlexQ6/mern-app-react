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
              <a className="nav-link" href="/">
                HOME
              </a>
            </li>
            <li>
              <a className="nav-link" href="/order">
                ORDER
              </a>
            </li>
            <li>
              <a className="nav-link" href="/contact">
                CONTACT US
              </a>
            </li>
            <li>
              <a className="nav-link" href="/checkout">
                CHECKOUT
              </a>
            </li>
          </ul>
        </nav>
      </div>
      
    </>
  );
};

export default Header;
