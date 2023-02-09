import React from 'react';
import "../Stylesheets/Us.css";
import us from "../Photos/about-img.png"

const Us = () => {
  return (
    <>
      <div className="service-container" id="about">
        <div className="service-heading">
          {/* <h1>Our Services</h1> */}
        </div>
        <div className="us-image">
          <img src={us} alt="" />
        </div>
        <div className="us-para">
          <h1>We are <span>The Dine</span> </h1>
          <p>Welcome to The Dine, where we believe that dining is about more than just food. It's about coming together with friends and family to create memories that will last a lifetime.Our menu features a variety of dishes inspired by cuisine, made with only the freshest and highest quality ingredients.we're committed to providing an unforgettable dining experience for all of our guests. Our welcoming and knowledgeable staff will be happy to assist you with menu recommendations and ensure that your meal is nothing short of perfect.we can't wait to serve you.</p>

          <a href="https://github.com/vikasthakurr" target="_blank">Read More</a>
        </div>
        
      </div>
    </>
  )
}

export default Us;