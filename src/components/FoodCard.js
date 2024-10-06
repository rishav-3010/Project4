// src/components/FoodCard.js
import React from 'react';


const FoodCard = ({ image, name, price, addToCart }) => {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>₹{price}.00</p>
      <button onClick={() => addToCart(name, price, image)}>Add to Cart</button>
    </div>
  );
};

export default FoodCard;
