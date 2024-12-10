// src/components/ProductCard.jsx
import React from "react";
import "../styles/product-card.css";

const ProductCard = () => {
  return (
    <div className="product-card">
      <img src="https://via.placeholder.com/150" alt="Product" />
      <h3>Hausa Cap</h3>
      <p>₦10,000</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
