import React from 'react';
import "../Stylesheets/Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">

      <div className="footer-left">
        <h1>Contact Us</h1>
        <div className="content-left">
          <p>Jalandhar, Punjab</p>
          <p>9068003323</p>
         
        </div>
      </div>
      <div className="footer-mid">
        <h1>The Dine</h1>
        <div className="content-mid">
          <p>Designed by Vikas Kumar</p>
        </div>
      </div>
      <div className="footer-right">
        <div className="content-right">
          <h1>Opening Hours</h1>
          <p>Everyday</p>
          <p>10 Am To 10 Pm</p>
        </div>
      </div>

    </div>
  )
}

export default Footer;