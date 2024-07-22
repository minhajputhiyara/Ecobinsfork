// src/components/OrderDetails.js

import React from 'react';
import './OrderDetails.css';

const OrderDetails = () => {
  const orderDetails = {
    status: 'Processing',
    items: ['Plastic bottles', 'Paper', 'Electronics'],
    delivery: {
      date: '2024-07-25',
      time: '14:00-16:00',
      location: '123 Green St, Eco City'
    }
  };

  return (
    <div className="order-details-card">
      <h2>Order Details</h2>
      <div className="order-info">
        <div className="info-item">
          <span className="label">Status:</span>
          <span className="value">{orderDetails.status}</span>
        </div>
        <div className="info-item">
          <span className="label">Items:</span>
          <ul className="items-list">
            {orderDetails.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="info-item">
          <span className="label">Delivery Information:</span>
          <div className="delivery-details">
            <p>Date: {orderDetails.delivery.date}</p>
            <p>Time: {orderDetails.delivery.time}</p>
            <p>Location: {orderDetails.delivery.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;