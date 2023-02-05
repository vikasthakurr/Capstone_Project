import React from 'react';
import "../Stylesheets/Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="home">
        <div className="navbar">
          <div className="nav-links">
            <h2>The Dine</h2>
            <ul>
              <li><a href="" className="active">Home</a></li>
              <li><a href="">Menu</a></li>
              <li><a href="">About</a></li>
              <li><a href="">Order</a></li>
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
      </div>
    </>
  )
}

export default Navbar;