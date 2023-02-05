import React from 'react';
import "../Stylesheets/Navbar.css";

const Home = () => {
  return (
    
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
  )
}

export default Home;