
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './Home.css';

const Home = () => {
  return (
    <div>
        <Navbar />
      <div className="banner">
        <img src="/images/banner.jpg" alt="Banner" className="banner-image" />
        <div className="banner-text">
          <p className="brand">Fresh Food Market</p>
          <h2 className="main-heading">Healthy, Fresh, and Delivered to Your Door</h2>
          <p className="subheading">
            Discover a wide variety of fresh produce and quality products to make every meal delicious.
          </p>
          <a href="/shop" className="shop-now-btn">
            Shop Now
          </a>
          <p className="website">www.freshfoodmarket.com / @freshfoodmarket</p>
          <p className="offer">Special Deal: 15% Off on Your First Order</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
