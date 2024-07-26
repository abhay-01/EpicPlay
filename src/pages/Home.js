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

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="title">Upcoming Matches</div>
        <div className="container">
          <div className="card">
            <div className="image">
              <img src={img1} />
            </div>

            <div className="name">
              <img src={logo1} />
              Call Of Duty
            </div>
            <div className="text">
              <span>21 Feb-6 Mar,08:00 PM</span>
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
          <div className="card">
            <div className="image">
              <img src={img2} />
            </div>

            <div className="name">
              <img src={logo2} />
              apex Of Legend
            </div>
            <div className="text">
              <span>21 Feb-6 Mar,08:00 PM</span>
              <h2>Apex Of Legend Royal Batlle</h2>
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
                  <span>₹44k</span>
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
          <div className="card">
            <div className="image">
              <img src={img3} />
            </div>

            <div className="name">
              <img src={logo3} />
              Valorant
            </div>
            <div className="text">
              <span>21 Feb-6 Mar,08:00 PM</span>
              <h2>Valorant Multiplayer</h2>
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
                  <span>₹29k</span>
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
          <div className="card">
            <div className="image">
              <img src={img1} />
            </div>

            <div className="name">
              <img src={logo1} />
              Call Of Duty
            </div>
            <div className="text">
              <span>21 Feb-6 Mar,08:00 PM</span>
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

        <div className="container">
          <div className="card">
            <div className="image">
              <img src={img1} />
            </div>

            <div className="name">
              <img src={logo1} />
              Call Of Duty
            </div>
            <div className="text">
              <span>21 Feb-6 Mar,08:00 PM</span>
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
          <div className="card">
            <div className="image">
              <img src={img2} />
            </div>

            <div className="name">
              <img src={logo2} />
              apex Of Legend
            </div>
            <div className="text">
              <span>21 Feb-6 Mar,08:00 PM</span>
              <h2>Apex Of Legend Royal Batlle</h2>
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
                  <span>₹44k</span>
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
          <div className="card">
            <div className="image">
              <img src={img3} />
            </div>

            <div className="name">
              <img src={logo3} />
              Valorant
            </div>
            <div className="text">
              <span>21 Feb-6 Mar,08:00 PM</span>
              <h2>Valorant Multiplayer</h2>
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
                  <span>₹29k</span>
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
          <div className="card">
            <div className="image">
              <img src={img1} />
            </div>

            <div className="name">
              <img src={logo1} />
              Call Of Duty
            </div>
            <div className="text">
              <span>21 Feb-6 Mar,08:00 PM</span>
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
      </div>
    </>
  );
};

export default Home;
