import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiHome, FiInfo, FiPhone,  } from "react-icons/fi"; // Import icons from react-icons
import { FaFolderOpen} from "react-icons/fa6"; // Import icons from react-icons
import Image from "../assets/fonts/PayFlex.svg";

const SideBar = () => {
  // Define an array of menu items with their respective icons and paths
  const menuItems = [
    { text: "Dashboard", icon: FiHome, path: "/" },
    { text: "About", icon: FiInfo, path: "/about" },
    { text: "Connect", icon: FiPhone, path: "/connect" },
    { text: "Projects", icon: FaFolderOpen, path: "/projects" },
    // Add more menu items as needed
  ];

  const [selectedItem, setSelectedItem] = useState(0); // Default selected item is Home
console.log(selectedItem)
  const menuItemStyle = {
    padding: "10px 10px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    backgroundColor: "transparent",
    borderRadius: "10px 0px 0px",
    color: "#44546f", // Initial text color
    transition: "background-color 0.3s, color 0.3s, font-weight 0.3s",
    fontSize: "18px",
    borderBottom: "0px dash green",
    marginLeft: 15,
    marginRight: 15,
    margin: 10,
  };

  const handleItemClick = (index) => {
    setSelectedItem(index);
  };

  // Get current path from React Router
  const location = useLocation();

  return (
    <div style={{ backgroundColor: "#fff", borderRight: "0.2px solid #ece6e6" }}>
      <img
        src={Image}
        alt="Logo"
        style={{
          height: 80,
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      />

      <div style={{ marginTop: 0 }}>
        {/* Render menu items dynamically using Link from React Router */}
        {menuItems.map((menuItem, index) => (
          <Link
            key={index}
            to={menuItem.path}
            style={{
              ...menuItemStyle,
              fontWeight: location.pathname === menuItem.path ? "bold" : "normal",
              backgroundColor: location.pathname === menuItem.path ? "#e9f2ff" : "transparent",
              color: location.pathname === menuItem.path ? "#0c66e4" : "#44546f",
            }}
            onClick={() => handleItemClick(index)}
          >
            <menuItem.icon
              style={{
                marginRight: "10px",
                fontSize: "20px",
                color: location.pathname === menuItem.path ? "#0c66e4" : "#44546f",
              }}
            />{" "}
            {/* Initial icon color */}
            <div style={{ fontSize: "17px", fontFamily: "DMM" }}>
              {menuItem.text}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
