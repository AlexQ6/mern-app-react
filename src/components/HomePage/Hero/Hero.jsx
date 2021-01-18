import ImageCarousel from "../Carousel/ImageCarousel"
import React from "react";
import "./Hero.css"

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-left">
        <div>
          <h1 className="hero-text">
            Thanks for your support we are open and looking forward to have you
            guys.
          </h1>
        </div>
        <div className="call-to-action">
          <button className="cta-btn">PLACE AN ORDER</button>
        </div>
      </div>
      <div className="hero-right">
        <ImageCarousel />
      </div>
    </section>
  );
};

export default Hero;
