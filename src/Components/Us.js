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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eveniet corrupti, quidem molestiae itaque dolor ratione sit quasi sequi natus? Mollitia accusamus neque enim, eos reprehenderit deserunt porro magni voluptate.lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ea maiores laborum deserunt necessitatibus repellendus? Exercitationem rem non id facilis quidem veniam porro nihil magnam alias deserunt, veritatis adipisci libero.</p>

          <a href="https://github.com/vikasthakurr" target="_blank">Read More</a>
        </div>
        
      </div>
    </>
  )
}

export default Us;