import React from 'react';
import "../Stylesheets/Services.css";
// image imported here
import card_1 from "../Photos/card-1.jpg";
import card_2 from "../Photos/card-2.jpg";

const Service = () => {
  return (
    <>
      <div className="container-box">
        <div className="box">
          <h1>Special Discount Days</h1>
        </div>
        <div className="offers">
          <div className="cards">
            <div className="imgs">
              <img src={card_1} />
            </div>
            <div className="contents">
              <h2>Midnight Cravings</h2>
              <p>30% Off</p>
              <button className="order-btn">Place Order <i class="fa-solid fa-cart-shopping"></i></button>
            </div>
          </div>

          {/* card-2 */}
          <div className="cards">
            <div className="imgs">
              <img src={card_2} />
            </div>
            <div className="contents">
              <h2>Family Weekend</h2>
              <p>50% Off</p>
              <button className="order-btn">Place Order <i class="fa-solid fa-cart-shopping"></i></button>
            </div>
          </div>
        </div>

        <div className="menu-heading" id="menu">
          <div className="heading">
            <h1>Ours Specials</h1>
            <p>Main Course</p>
            <hr />
          </div>
        </div>
      </div>

     
    </>
  )
}

export default Service;