import React from 'react';
import "../Stylesheets/Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="home" id="first">
        <div className="navbar">
          <div className="nav-links">
            <h2>The Dine</h2>
            <ul>
              <li><a href="" className="active">Home</a></li>
              <li><a href="#menu">Menu</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#orders">Order</a></li>
            </ul>
          </div>
        </div>
        <div className="hero">
          <div className="hero-content">
            <h1>Welcome to <span>The Dine</span></h1>
          </div>
          <div className="button-more">
            <a href="">Know More</a>
          </div>

        </div>


        <div className="social-nav">
          <a href=""><i className="one fa-brands fa-instagram"></i></a>
          <a href=""><i className="two fa-brands fa-facebook"></i></a>
          <a href=""><i className="three fa-brands fa-twitter"></i></a>
          <a href=""><i className="four fa-solid fa-envelope"></i></a>
        </div>
      </div>
    </>
  )
}

export default Navbar;