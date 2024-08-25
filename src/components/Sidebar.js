import React, { useState } from "react";

import {
  FaBars,
  FaCog,
  FaDownload,
  FaHome,
  FaQuestionCircle,
  FaSearch,
  FaUserFriends,
  FaUserPlus,
} from "react-icons/fa";
import { FaArrowDown, FaGamepad } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

export const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const menuItem = [
    {
      path: "/",
      name: "Home",
      icon: <FaHome />,
    },
    {
      path: "/allgames",
      name: "ALL Games",
      icon: <FaGamepad />,
    },
    {
      path: "/addgames",

      name: "Add games",
      icon: <FaGamepad />,
    },
    {
      path: "/friends",

      name: "Friends",
      icon: <FaUserFriends />,
    },
    {
      path: "/addfriends",
      name: "Add Friends",
      icon: <FaUserPlus />,
    },
    {
      path: "/insatll",
      name: "Installed Games",
      icon: <FaDownload />,
    },
    {
      path: "/invite",
      name: "Settings",
      icon: <FaCog />,
    },
    {
      path: "/faqs",
      name: "FAQS",
      icon: <FaQuestionCircle />,
    },
  ];

  return (
    <div className="container">
      <div style={{ width: isOpen ? "250px" : "50px" }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            Logo
          </h1>
          <div style={{ marginLeft: isOpen ? "100px" : "0" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>

        <div className={`explore ${isOpen ? "expanded" : "collapsed"}`}>
          <div className="icon">
            <FaSearch />
          </div>
          {isOpen && <div className="explore-text">Explore</div>}
        </div>

        <div className="footer">
          <div></div>
          <div></div>
          <div></div>
        </div>

        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main className="main-conten">{children}</main>
    </div>
  );
};
