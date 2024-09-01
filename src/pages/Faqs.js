import React, { useState } from "react";
import bg from "../assets/bg.svg";
import { FaGem, FaSearch, FaChevronDown } from "react-icons/fa";

const Faqs = () => {
  const [language, setLanguage] = useState("ENG");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <div
        style={{
          height: "100vh",
          overflowY: "auto",
          backgroundColor: "black",
          color: "white",
          width: "100vw",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{ padding: "20px", textAlign: "center" }}
          className="flex items-center justify-between p-4 border-b border-white border-opacity-35  ml-9"
        >
          <input
            type="text"
            placeholder="Search for games..."
            className="w-8/12 py-2 pl-6 border  rounded-md text-[16px] bg-transparent px-2"
          />

          <div className="flex items-center space-x-6 ">
            <div className="flex items-center mr-4">
              <div className="flex justify-center items-center bg-gray-800 rounded-full w-8 h-8">
                <FaGem className="text-white" />
              </div>
              <div className="ml-0 flex flex-col text-white">
                <span className="text-xs font-light">Coins</span>
                <span className="text-sm font-bold">00</span>
              </div>
            </div>

            <div className="relative ml-6">
              <button
                className="flex items-center bg-gray-800 text-white py-1 px-3 rounded-full"
                onClick={toggleDropdown}
              >
                {language} <FaChevronDown className="ml-1" />
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 bg-white text-black rounded-md shadow-lg">
                  <button
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={() => handleLanguageChange("ENG")}
                  >
                    English
                  </button>
                  <button
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={() => handleLanguageChange("HIN")}
                  >
                    Hindi
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        <div
          className={`flex flex-col   items-center justify-center flex-1`}
          style={{
            width: "100%",
            backgroundImage: `url(${bg})`,
            backgroundRepeat: "repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
    </div>
  );
};
export default Faqs;
