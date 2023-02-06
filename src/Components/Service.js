import React from 'react';
import "../Stylesheets/Services.css";
// image imported here
import card_1 from "../Photos/card-1.jpg";
import card_2 from "../Photos/card-2.jpg";
import card_3 from "../Photos/card-3.jpg";
import card_4 from "../Photos/card-4.jpg";
import card_5 from "../Photos/card-5.jpg";
import card_6 from "../Photos/card-6.jpg";
import card_7 from "../Photos/card-7.jpg";

//pizza images imported here....
import pic1 from "../Photos/pizza1.jpg";
import pic2 from "../Photos/pizza2.jpg";
import pic3 from "../Photos/pizza3.jpg";
import pic4 from "../Photos/pizza4.jpg";
import pic5 from "../Photos/pizza5.jpg";

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
              <button className="order-btn">Place Order <i className="fa-solid fa-cart-shopping"></i></button>
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
              <button className="order-btn">Place Order <i className="fa-solid fa-cart-shopping"></i></button>
            </div>
          </div>
        </div>
      </div>


      <div className="menu-heading" id="menu">
        <div className="heading">
          <h1>Ours Specials</h1>
          <p>Main Course</p>
        </div>
        <div className="main-course">
          <div className="course">
            <img src={card_2} alt="" />
          </div>
          <div className="course-name">
            <h1>Mushroom Fry</h1>
            <p>Rs. 350/Full</p>
          </div>
          <a href="" className="order-course">Order Now</a>
        </div>


        <div className="main-course">
          <div className="course">
            <img src={card_7} alt="" />
          </div>
          <div className="course-name">
            <h1>Rajma Gravy</h1>
            <p>Rs. 180/Full</p>
          </div>
          <a href="" className="order-course">Order Now</a>
        </div>

        <div className="main-course">
          <div className="course">
            <img src={card_4} alt="" />
          </div>
          <div className="course-name">
            <h1>Shahi Paneer</h1>
            <p>Rs. 450/Full</p>
          </div>
          <a href="" className="order-course">Order Now</a>
        </div>


        <div className="main-course">
          <div className="course">
            <img src={card_5} alt="" />
          </div>
          <div className="course-name">
            <h1>Kadhai Paneer</h1>
            <p>Rs. 400/Full</p>
          </div>
          <a href="" className="order-course">Order Now</a>
        </div>

        <div className="main-course">
          <div className="course">
            <img src={card_6} alt="" />
          </div>
          <div className="course-name">
            <h1>Yellow Dal</h1>
            <p>Rs. 170/Full</p>
          </div>
          <a href="" className="order-course">Order Now</a>
        </div>
      </div>


      <div className="menu-headings" id="menu">
        <div className="headings">
          {/* <h1>Ours Specials</h1> */}
          <p>Pizzas</p>
        </div>
        <div className="main-courses">
          <div className="courses">
            <img src={pic1} alt="" />
          </div>
          <div className="course-names">
            <h1>Chips Cream</h1>
            <p>Rs. 350/Full</p>
          </div>
          <a href="" className="order-courses">Order Now</a>
        </div>


        <div className="main-courses">
          <div className="courses">
            <img src={pic2} alt="" />
          </div>
          <div className="course-names">
            <h1>Maghrita Pizza</h1>
            <p>Rs. 480/Full</p>
          </div>
          <a href="" className="order-courses">Order Now</a>
        </div>

        <div className="main-courses">
          <div className="courses">
            <img src={pic3} alt="" />
          </div>
          <div className="course-names">
            <h1>Onion Special</h1>
            <p>Rs. 450/Full</p>
          </div>
          <a href="" className="order-courses">Order Now</a>
        </div>


        <div className="main-courses">
          <div className="courses">
            <img src={pic4} alt="" />
          </div>
          <div className="course-names">
            <h1>Extra Cheese</h1>
            <p>Rs. 400/Full</p>
          </div>
          <a href="" className="order-courses">Order Now</a>
        </div>

        <div className="main-courses">
          <div className="courses">
            <img src={pic5} alt="" />
          </div>
          <div className="course-names">
            <h1>Crunchy Special</h1>
            <p>Rs. 270/Full</p>
          </div>
          <a href="" className="order-courses">Order Now</a>
        </div>
      </div>




    </>
  )
}

export default Service;