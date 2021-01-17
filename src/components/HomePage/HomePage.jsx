import React from "react";
import Hero from "./Hero";
import Header from "../Header/Header"
import ImageCarousel from "../Carousel/ImageCarousel"

const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      <ImageCarousel />
    </>
  );
};

export default HomePage