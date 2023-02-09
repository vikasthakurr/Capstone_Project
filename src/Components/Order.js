import React, { useState } from "react";
import "../Stylesheets/Order.css";

function Order() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [mobileError, setMobileError] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    let nameError = "";
    let emailError = "";
    let mobileError = "";

    if (!name) {
      nameError = "Name is required";
    }

    if (!email.includes("@")) {
      emailError = "Invalid email address";
    }


    if (!/^\d{10}$/.test(mobile)) {
      mobileError = "Invalid mobile number (only 10 digits allowed)";
    }

    if (nameError || emailError || mobileError) {
      setNameError(nameError);
      setEmailError(emailError);
      setMobileError(mobileError);
      return;
    }

    alert("Seat booked successfully");
  };

  return (
    <div className="order-box" id="book">
    <h1>Book Your Seat</h1>
      <div className="cont">
        <form onSubmit={handleSubmit}>

          <input
            type="text" placeholder="Name..."
            value={name}
            onChange={e => setName(e.target.value)}
          />
          {nameError && <div style={{ color: "red" }}>{nameError}</div>}


          <input type="email" placeholder="Email..." value={email} onChange={e =>
            setEmail(e.target.value)} />
          {emailError && <div style={{ color: "red" }}>{emailError}</div>}



          <input
            type="text" placeholder="Mobile..."
            value={mobile}
            onChange={e => setMobile(e.target.value)}
          />
          {mobileError && <div style={{ color: "red" }}>{mobileError}</div>}

          <button className="sbt" type="submit">Submit</button>
        </form>

        <a href="#first" className="top"><i class="fa-sharp fa-solid fa-arrow-up"></i></a>
      </div>

    </div>
  );
}

export default Order;
