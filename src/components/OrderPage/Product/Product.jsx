import React from "react";
import "./Product.css";

const Product = ({ product, addToCart }) => {

  const onCartButtonClick = () => {
    const newItem = {
      name: product.name,
      price: product.price
    }

    console.log(newItem)

    addToCart(newItem)
  }

  return (
    <div className="product">

      <h3>{product.name}</h3>
      <img className="product-img" src={product.image} alt="product" />
      <p className="product-price">${product.price.toFixed(2)}</p>
      <p className="product-desc">{product.description}</p>

      <button className="addToCartButton" onClick={onCartButtonClick} >Add to Cart</button>
      <div className="tags">
        <ul className="tags-list">
          {product.tags.map((tag) => (
            <li className="tag" key={tag._id} style={{ background: tag.color }}>
              {tag.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Product;
