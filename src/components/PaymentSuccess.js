import React, { useEffect, useState } from 'react';
import './PaymentSuccess.css';

const PaymentSuccess = () => {
  const [totalCost, setTotalCost] = useState('');

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const cost = urlParams.get('totalCost');
    setTotalCost(cost);
  }, []);

  return (
    <div className="paymentsuccess">
    <div className="success-container">
        <h1>Payment Successful!</h1>
        <p>Your total amount paid is: ₹<span id="totalAmount">{totalCost}</span></p>
        <a href="/" className="back-button">Back to Home</a>
    </div>
</div>
  );
};

export default PaymentSuccess;
