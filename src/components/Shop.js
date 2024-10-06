// src/components/Shop.js
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import FoodCard from './FoodCard';
import './Shop.css';

const Shop = () => {
  const addToCart = (itemName, itemPrice, imagePath) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name: itemName, price: itemPrice, image: imagePath });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${itemName} added to cart!`);
  };

  const foodItems = [
    {
      image: 'veg-pizza1.jpg',
      name: 'Margherita Pizza',
      price: 299,
    },
    {
      image: 'veg-pizza2.jpg',
      name: 'Farmhouse Pizza',
      price: 399,
    },
    {
      image: 'veg-pizza3.jpg',
      name: 'Veggie Delight Pizza',
      price: 349,
    },
    {
      image: 'veg-pizza4.jpg',
      name: 'Paneer Tikka Pizza',
      price: 449,
    },
    {
      image: 'nonveg-pizza1.jpg',
      name: 'Pepperoni Pizza',
      price: 499,
    },
    {
      image: 'nonveg-pizza2.jpg',
      name: 'Chicken Supreme Pizza',
      price: 549,
    },
    {
      image: 'nonveg-pizza3.jpg',
      name: 'BBQ Chicken Pizza',
      price: 599,
    },
    {
      image: 'nonveg-pizza4.jpg',
      name: 'Meat Lovers Pizza',
      price: 649,
    },
    {
      image: 'chicken-drumsticks.jpg',
      name: 'Chicken Drumsticks',
      price: 299,
    },
    {
      image: 'paneer-butter-masala.jpg',
      name: 'Paneer Butter Masala',
      price: 350,
    },
    {
      image: 'egg-curry.jpg',
      name: 'Egg Curry',
      price: 250,
    },
    {
      image: 'butter-chicken.jpg',
      name: 'Butter Chicken',
      price: 499,
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="container">
        <h2>Shop Now</h2>
        <div className="card-container">
          {foodItems.map((item, index) => (
            <FoodCard
              key={index}
              image={item.image}
              name={item.name}
              price={item.price}
              addToCart={addToCart}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Shop;
