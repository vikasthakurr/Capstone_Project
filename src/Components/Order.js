import React from 'react';
import "../Stylesheets/Order.css";

const Order = () => {
  return (
    <>
      <div className="order">
        <div className="order-heading">
          <h1>Book A Table</h1>
        </div>

        <div className="order-form">
          <div className="form-box">
            <input type="text" placeholder="Your name..."/>
            <input type="text" placeholder="Mobile..." />
            <input type="email" placeholder="Email..." />
            <input type="text" placeholder="No. of person..." />
            <input type="date" className="dated" />
          </div>
        </div>

        <a href="">Book Now</a>

      </div>
    </>
  )
}

export default Order;