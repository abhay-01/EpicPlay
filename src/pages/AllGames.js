import React from "react";
import img1 from "../images/img1.jpeg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpeg";
import logo1 from "../images/logo1.jpeg";
import logo2 from "../images/logo2.jpeg";
import logo3 from "../images/logo3.png";
import trophy from "../images/trophy.png";
import group from "../images/group.png";
import "./Home.css";
import { FaArrowRight } from "react-icons/fa";


const AllGames = () => {

  const startServer = ()=>{
    // // fetch("http://localhost:3001/start-server")
    // // .then(response => response.text())
    // // .then(data => {
    // //   console.log(data);
    //   // Assuming the server starts successfully, redirect to the desired URL
    // })
    // .catch(error => {
    //   console.error('Error:', error);
    //   alert('Failed to start the server. Please try again.');
    // });
    window.open('http://localhost:3000', '_blank'); // Change to your server's URL

};
  return(
    <div style = {{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    marginLeft: "300px",
    }}>
  <div className="card" onClick={startServer}>
    <div className="image">
      <img src={img1} />
    </div>

    <div className="name">
      <img src={logo1} />
      Call Of Duty
    </div>
    <div className="text">
      <span>26 Feb-6 Mar,08:00 PM</span>
      <h2>Call Of Duty WarZone Mobile</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor...
      </p>
    </div>
    <div className="line">
      <hr />
    </div>

    <div className="bottom">
      <div className="first ">
        <span className="win">Win Price</span>
        <div className="both">
          <img src={trophy} />
          <span>₹28k</span>
        </div>
      </div>

      <div className="first ">
        <span className="win">Player Slot</span>
        <div className="both">
          <img src={group} />
          <span className="cost">4v4</span>
        </div>
      </div>

      <div className="first ">
        <FaArrowRight size={5} className="arrow" />
      </div>
    </div>
  </div>

  <div className="card" onClick={startServer}>
    <div className="image">
      <img src={img1} />
    </div>

    <div className="name">
      <img src={logo1} />
      Call Of Duty
    </div>
    <div className="text">
      <span>26 Feb-6 Mar,08:00 PM</span>
      <h2>Call Of Duty WarZone Mobile</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor...
      </p>
    </div>
    <div className="line">
      <hr />
    </div>

    <div className="bottom">
      <div className="first ">
        <span className="win">Win Price</span>
        <div className="both">
          <img src={trophy} />
          <span>₹28k</span>
        </div>
      </div>

      <div className="first ">
        <span className="win">Player Slot</span>
        <div className="both">
          <img src={group} />
          <span className="cost">4v4</span>
        </div>
      </div>

      <div className="first ">
        <FaArrowRight size={5} className="arrow" />
      </div>
    </div>
  </div>

  <div className="card" onClick={startServer}>
    <div className="image">
      <img src={img1} />
    </div>

    <div className="name">
      <img src={logo1} />
      Call Of Duty
    </div>
    <div className="text">
      <span>26 Feb-6 Mar,08:00 PM</span>
      <h2>Call Of Duty WarZone Mobile</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor...
      </p>
    </div>
    <div className="line">
      <hr />
    </div>

    <div className="bottom">
      <div className="first ">
        <span className="win">Win Price</span>
        <div className="both">
          <img src={trophy} />
          <span>₹28k</span>
        </div>
      </div>

      <div className="first ">
        <span className="win">Player Slot</span>
        <div className="both">
          <img src={group} />
          <span className="cost">4v4</span>
        </div>
      </div>

      <div className="first ">
        <FaArrowRight size={5} className="arrow" />
      </div>
    </div>
  </div>
  </div>
  );
};

export default AllGames;
