import React, { useState } from "react";

const NewProduct = () => {
  const [product, setProduct] = useState({
    tags: [{ name: "yes", color: "orange" }],
    options: [{ name: "option", price: 12 }],
  });

  const onTextChange = (e) => {
    const productToUpdate = { ...product };
    productToUpdate[e.target.name] = e.target.value;
    setProduct(productToUpdate);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    const productJSON = JSON.stringify(product);
    fetch("https://thecafeapp.herokuapp.com/products/new", {
      method: "POST",
      body: productJSON,
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <>
      <form onSubmit={onFormSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" onChange={onTextChange} />
        <label htmlFor="image">Image</label>
        <input type="text" name="image" id="image" onChange={onTextChange} />
        <label htmlFor="price">Price</label>
        <input type="number" name="price" id="price" onChange={onTextChange} />
        <label htmlFor="description">description</label>
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="10"
          onChange={onTextChange}
        ></textarea>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default NewProduct;
