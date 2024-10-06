// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/shop">Shop Now</Link>
      <Link to="/cart">Cart</Link>
    </nav>
  );
};

export default Navbar;
