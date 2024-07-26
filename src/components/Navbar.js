import React, { useState } from "react";
import { FaGem, FaSearch, FaChevronDown } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [language, setLanguage] = useState("ENG");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setIsDropdownOpen(false); // Close the dropdown after selection
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <>
      <div className="container">
        <div className="search">
          <div>
            <FaSearch />
          </div>
          <div className="search-text">Search..</div>
        </div>
        <div className="coin">
          <div className="coin-logo">
            <FaGem />
          </div>
          <div className="total">
            <div className="text">Coins</div>
            <div className="digits">00</div>
          </div>
        </div>
        <div className="lang">
          <div className="lang-dropdown">
            <button className="dropdown-button" onClick={toggleDropdown}>
              {language} <FaChevronDown />
            </button>
            {isDropdownOpen && (
              <div className="dropdown-content">
                <button onClick={() => handleLanguageChange("ENG")}>
                  English
                </button>
                <button onClick={() => handleLanguageChange("HIN")}>
                  Hindi
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
