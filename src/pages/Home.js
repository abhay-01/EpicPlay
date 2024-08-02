import React from "react";
import img1 from "../images/img1.jpeg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpeg";
import logo1 from "../images/logo1.jpeg";
import logo2 from "../images/logo2.jpeg";
import logo3 from "../images/logo3.png";
import trophy from "../images/trophy.png";
import group from "../images/group.png";
import { FaArrowRight } from "react-icons/fa";
import headerImage from "../images/headerImage.png";

const Home = () => {
  return (
    <div style={{ height: '100vh', overflowY: 'auto', backgroundColor: 'black', color: 'white' }}>
      {/* Search Bar */}
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <input
          type="text"
          placeholder="Search for games..."
          style={{
            width: '80%',
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            fontSize: '16px',
          }}
        />
      </div>

      {/* Header Image */}
      <div style={{ width: '100%' }}>
        <img src={headerImage} alt="Header Game" style={{ width: '100%', height: 'auto' }} />
      </div>

      {/* Upcoming Matches */}
      <div style={{ padding: '20px' }}>
        <div style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px',marginLeft:"60px" }}>Upcoming Matches</div>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between'
        }}>
          <div style={{
            flex: '1 1 30%',
            backgroundColor: '#333',
            borderRadius: '10px',
            marginBottom: '20px',
            padding: '20px',
            boxSizing: 'border-box',
            color: 'white',
            marginLeft: '20px'
          }}>
            <div style={{ marginBottom: '15px' }}>
              <img src={img1} alt="Game 1" style={{ width: '100%', borderRadius: '10px' }} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <img src={logo1} alt="Logo 1" style={{ width: '40px', height: '40px', marginRight: '10px' }} />
              Call Of Duty
            </div>
            <div style={{ marginBottom: '10px' }}>
              <span>21 Feb-6 Mar,08:00 PM</span>
              <h2 style={{ fontSize: '20px' }}>Call Of Duty WarZone Mobile</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...</p>
            </div>
            <hr style={{ borderColor: '#555' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
              <div style={{ textAlign: 'center' }}>
                <span style={{ display: 'block', fontWeight: 'bold' }}>Win Price</span>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img src={trophy} alt="Trophy" style={{ width: '20px', height: '20px', marginRight: '5px' }} />
                  <span>₹28k</span>
                </div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <span style={{ display: 'block', fontWeight: 'bold' }}>Player Slot</span>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img src={group} alt="Group" style={{ width: '20px', height: '20px', marginRight: '5px' }} />
                  <span>4v4</span>
                </div>
              </div>
              <FaArrowRight size={20} className="arrow"/>
            </div>
          </div>

          <div style={{
            flex: '1 1 30%',
            backgroundColor: '#333',
            borderRadius: '10px',
            marginBottom: '20px',
            padding: '20px',
            boxSizing: 'border-box',
            color: 'white',
            marginLeft: '20px'
          }}>
            <div style={{ marginBottom: '15px' }}>
              <img src={img2} alt="Game 2" style={{ width: '100%', borderRadius: '10px' }} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <img src={logo2} alt="Logo 2" style={{ width: '40px', height: '40px', marginRight: '10px' }} />
              Apex Of Legend
            </div>
            <div style={{ marginBottom: '10px' }}>
              <span>21 Feb-6 Mar,08:00 PM</span>
              <h2 style={{ fontSize: '20px' }}>Apex Of Legend Royal Battle</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...</p>
            </div>
            <hr style={{ borderColor: '#555' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
              <div style={{ textAlign: 'center' }}>
                <span style={{ display: 'block', fontWeight: 'bold' }}>Win Price</span>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img src={trophy} alt="Trophy" style={{ width: '20px', height: '20px', marginRight: '5px' }} />
                  <span>₹44k</span>
                </div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <span style={{ display: 'block', fontWeight: 'bold' }}>Player Slot</span>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img src={group} alt="Group" style={{ width: '20px', height: '20px', marginRight: '5px' }} />
                  <span>4v4</span>
                </div>
              </div>
              <FaArrowRight size={20} className="arrow"/>
            </div>
          </div>

          
          <div style={{
            flex: '1 1 30%',
            backgroundColor: '#333',
            borderRadius: '10px',
            marginBottom: '20px',
            padding: '20px',
            boxSizing: 'border-box',
            color: 'white',
            marginLeft: '20px'
          }}>
            <div style={{ marginBottom: '15px' }}>
              <img src={img3} alt="Game 3" style={{ width: '100%', borderRadius: '10px' }} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <img src={logo3} alt="Logo 3" style={{ width: '40px', height: '40px', marginRight: '10px' }} />
              Valorant
            </div>
            <div style={{ marginBottom: '10px' }}>
              <span>21 Feb-6 Mar,08:00 PM</span>
              <h2 style={{ fontSize: '20px' }}>Valorant Multiplayer</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...</p>
            </div>
            <hr style={{ borderColor: '#555' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
              <div style={{ textAlign: 'center' }}>
                <span style={{ display: 'block', fontWeight: 'bold' }}>Win Price</span>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img src={trophy} alt="Trophy" style={{ width: '20px', height: '20px', marginRight: '5px' }} />
                  <span>₹29k</span>
                </div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <span style={{ display: 'block', fontWeight: 'bold' }}>Player Slot</span>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img src={group} alt="Group" style={{ width: '20px', height: '20px', marginRight: '5px' }} />
                  <span>4v4</span>
                </div>
              </div>
              <FaArrowRight size={20} className="arrow"/>
            </div>
          </div>

          
          <div style={{
            flex: '1 1 30%',
            backgroundColor: '#333',
            borderRadius: '10px',
            marginBottom: '20px',
            padding: '20px',
            boxSizing: 'border-box',
            color: 'white',
            marginLeft: '20px'
          }}>
            <div style={{ marginBottom: '15px' }}>
              <img src={img3} alt="Game 3" style={{ width: '100%', borderRadius: '10px' }} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <img src={logo3} alt="Logo 3" style={{ width: '40px', height: '40px', marginRight: '10px' }} />
              Valorant
            </div>
            <div style={{ marginBottom: '10px' }}>
              <span>21 Feb-6 Mar,08:00 PM</span>
              <h2 style={{ fontSize: '20px' }}>Valorant Multiplayer</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...</p>
            </div>
            <hr style={{ borderColor: '#555' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
              <div style={{ textAlign: 'center' }}>
                <span style={{ display: 'block', fontWeight: 'bold' }}>Win Price</span>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img src={trophy} alt="Trophy" style={{ width: '20px', height: '20px', marginRight: '5px' }} />
                  <span>₹29k</span>
                </div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <span style={{ display: 'block', fontWeight: 'bold' }}>Player Slot</span>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img src={group} alt="Group" style={{ width: '20px', height: '20px', marginRight: '5px' }} />
                  <span>4v4</span>
                </div>
              </div>
              <FaArrowRight size={20} className="arrow"/>
            </div>
          </div>
          
          <div style={{
            flex: '1 1 30%',
            backgroundColor: '#333',
            borderRadius: '10px',
            marginBottom: '20px',
            padding: '20px',
            boxSizing: 'border-box',
            color: 'white',
            marginLeft: '20px'
          }}>
            <div style={{ marginBottom: '15px' }}>
              <img src={img3} alt="Game 3" style={{ width: '100%', borderRadius: '10px' }} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <img src={logo3} alt="Logo 3" style={{ width: '40px', height: '40px', marginRight: '10px' }} />
              Valorant
            </div>
            <div style={{ marginBottom: '10px' }}>
              <span>21 Feb-6 Mar,08:00 PM</span>
              <h2 style={{ fontSize: '20px' }}>Valorant Multiplayer</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...</p>
            </div>
            <hr style={{ borderColor: '#555' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
              <div style={{ textAlign: 'center' }}>
                <span style={{ display: 'block', fontWeight: 'bold' }}>Win Price</span>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img src={trophy} alt="Trophy" style={{ width: '20px', height: '20px', marginRight: '5px' }} />
                  <span>₹29k</span>
                </div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <span style={{ display: 'block', fontWeight: 'bold' }}>Player Slot</span>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img src={group} alt="Group" style={{ width: '20px', height: '20px', marginRight: '5px' }} />
                  <span>4v4</span>
                </div>
              </div>
              <FaArrowRight size={20} className="arrow"/>
            </div>
          </div>

          <div style={{
            flex: '1 1 30%',
            backgroundColor: '#333',
            borderRadius: '10px',
            marginBottom: '20px',
            padding: '20px',
            boxSizing: 'border-box',
            color: 'white',
            marginLeft: '20px'
          }}>
            <div style={{ marginBottom: '15px' }}>
              <img src={img3} alt="Game 3" style={{ width: '100%', borderRadius: '10px' }} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <img src={logo3} alt="Logo 3" style={{ width: '40px', height: '40px', marginRight: '10px' }} />
              Valorant
            </div>
            <div style={{ marginBottom: '10px' }}>
              <span>21 Feb-6 Mar,08:00 PM</span>
              <h2 style={{ fontSize: '20px' }}>Valorant Multiplayer</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...</p>
            </div>
            <hr style={{ borderColor: '#555' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
              <div style={{ textAlign: 'center' }}>
                <span style={{ display: 'block', fontWeight: 'bold' }}>Win Price</span>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img src={trophy} alt="Trophy" style={{ width: '20px', height: '20px', marginRight: '5px' }} />
                  <span>₹29k</span>
                </div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <span style={{ display: 'block', fontWeight: 'bold' }}>Player Slot</span>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img src={group} alt="Group" style={{ width: '20px', height: '20px', marginRight: '5px' }} />
                  <span>4v4</span>
                </div>
              </div>
              <FaArrowRight size={20} className="arrow"/>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;
