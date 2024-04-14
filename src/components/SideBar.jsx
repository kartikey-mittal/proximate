import React, { useState } from "react";
import { FiHome, FiInfo, FiPhone } from "react-icons/fi"; // Import icons from react-icons

const SideBar = () => {
  // Define an array of menu items with their respective icons
  const menuItems = [
    { text: "Dashboard", icon: FiHome },
    { text: "About", icon: FiInfo },
    { text: "Connect", icon: FiPhone },
    // Add more menu items as needed
  ];

  const [selectedItem, setSelectedItem] = useState(0); // Default selected item is Home

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

  return (
    <div style={{ backgroundColor: "#fff" }}>
      Proximate [LOGO]
  
      <div style={{ marginTop: 50 }}>
        {/* Render menu items dynamically */}
        {menuItems.map((menuItem, index) => (
          <div
            key={index}
            style={{
              ...menuItemStyle,
              fontWeight: selectedItem === index ? "normal" : "normal",
              backgroundColor: selectedItem === index ? "#e9f2ff" : "transparent",
              color: selectedItem === index ? "#0c66e4" : "#44546f"
            }}
            onMouseEnter={() => {
              if (selectedItem !== index) {
                menuItemStyle.backgroundColor = "#e9f2ff";
                menuItemStyle.color = "#6777ef";
                menuItemStyle.fontWeight = "bold";
              }
            }}
            onMouseLeave={() => {
              if (selectedItem !== index) {
                menuItemStyle.backgroundColor = "transparent";
                menuItemStyle.color = "#44546f";
                menuItemStyle.fontWeight = "normal";
              }
            }}
            onClick={() => handleItemClick(index)}
          >
            <menuItem.icon style={{ marginRight: "10px", fontSize: "20px", color: selectedItem === index ? "#0c66e4" : "#44546f" }} /> {/* Initial icon color */}
            <div style={{ fontSize: '17px',fontFamily:'DMM'}}>
              {menuItem.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
