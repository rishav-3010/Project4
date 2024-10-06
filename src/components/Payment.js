import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Payment.css';

const Payment = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const navigate = useNavigate();

  const urlParams = new URLSearchParams(window.location.search);
  const totalCost = urlParams.get('totalCost');

  const handlePayment = (event) => {
    event.preventDefault();


    if (!/^\d{16}$/.test(cardNumber)) {
      alert('Invalid card number. It must be a 16-digit number.');
      return;
    }


    const [month, year] = expiryDate.split('/');
    const currentDate = new Date();
    const expiryYear = parseInt(`20${year}`, 10);
    const expiryMonth = parseInt(month, 10);

    if (!/^\d{2}\/\d{2}$/.test(expiryDate) || expiryMonth < 1 || expiryMonth > 12) {
      alert('Invalid expiry date. Use MM/YY format.');
      return;
    }

    const isExpired =
      expiryYear < currentDate.getFullYear() ||
      (expiryYear === currentDate.getFullYear() && expiryMonth < currentDate.getMonth() + 1);

    if (isExpired) {
      alert('Your card is expired.');
      return;
    }


    if (!/^\d{3}$/.test(cvv)) {
      alert('Invalid CVV. It must be a 3-digit number.');
      return;
    }


    navigate(`/success?totalCost=${totalCost}`);
  };

  return (
    <div className="payment-page">
    <div className="payment-container">
      <h2>Payment Details</h2>
      <form onSubmit={handlePayment}>
        <label htmlFor="cardNumber">Debit Card Number:</label>
        <input
          type="text"
          id="cardNumber"
          maxLength="16"
          placeholder="Enter 16-digit card number"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          required
        />

        <label htmlFor="expiryDate">Expiry Date (MM/YY):</label>
        <input
          type="text"
          id="expiryDate"
          placeholder="MM/YY"
          maxLength="5"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
          required
        />

        <label htmlFor="cvv">CVV:</label>
        <input
          type="text"
          id="cvv"
          maxLength="3"
          placeholder="3-digit CVV"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
          required
        />

        <p id="amount">Total Amount: ₹<span id="totalAmount">{totalCost}</span></p>

        <button type="submit" id="payNowButton">Pay Now</button>
      </form>
    </div>
    </div>
  );
};

export default Payment;
