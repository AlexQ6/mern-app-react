import React from "react";

const ProductCMS = ({ products }) => {
  return (
    <>
      {products.map((product) => (
        <div className="product-cms">
          <h3>{product.name}</h3>
          <img className="product-img" src={product.image} alt="product" />
          <p className="product-price">${product.price.toFixed(2)}</p>
          <p className="product-desc">{product.description}</p>
          <ul className="tags-list">
            {product.tags.map((tag) => (
              <li
                className="tag"
                key={tag._id}
                style={{ background: tag.color }}
              >
                {tag.name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default ProductCMS;
