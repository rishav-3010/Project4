import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Shop from './components/Shop';
import Cart from './components/Cart';
import Payment from './components/Payment';
import PaymentSuccess from './components/PaymentSuccess';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} /> 
        <Route path="/success" element={<PaymentSuccess />} />
      </Routes>
    </Router>
  );
}

export default App;
