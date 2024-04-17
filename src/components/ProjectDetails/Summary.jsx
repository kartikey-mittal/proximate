import React from "react";
import { FaMoneyBillWave } from "react-icons/fa";
import DonutChart from "../Donut";
import { MdTask } from "react-icons/md";
const Card = ({ icon, title, amount, iconBackgroundColor }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: "#fff",
        padding: "10px",
        borderRadius: "0px",
        width: "200px",
        boxShadow: "1px 1px 1px 1px rgba(0.5, 0, 0, 0.1)",
        marginLeft: "20px"
      }}
    >
      <div style={{ backgroundColor: iconBackgroundColor, padding: "10px", borderRadius: "0%" }} className="mx-2">
        {icon}
      </div>
      <div style={{ marginLeft: "10px" }}>
        <h2
          style={{
            margin: "0",
            fontWeight: "normal",
            fontSize: "14px",
            color: "#97757d",
            fontFamily: "DMM"
          }}
        >
          {title}
        </h2>
        <p
          style={{
            margin: "0",
            fontSize: "18px",
            color: "#333",
            fontFamily: "DMM"
          }}
        >
          {amount}
        </p>
      </div>
    </div>
  );
};

const Summary = () => {
  // Example data array
  const cardsData = [
    { icon: <FaMoneyBillWave style={{ fontSize: "30px", color: "white" }} />, title: "Budget", amount: "$100", iconBackgroundColor: "#36b399" },
    { icon: <MdTask style={{ fontSize: "30px", color: "white" }} />, title: "Tasks", amount: "4/7", iconBackgroundColor: "#0086d9" }
    // Add more data as needed
  ];

  return (
    <>
      <div style={{ display: "flex" }}>
        <div style={{ width: "65%", backgroundColor: "transparent" }}>
          <div style={{ display: "flex" }}>
            {/* Render cards using map */}
            {cardsData.map((data, index) => (
              <Card key={index} icon={data.icon} title={data.title} amount={data.amount} iconBackgroundColor={data.iconBackgroundColor} />
            ))}
          </div>
        </div>
        <DonutChart />
      </div>
    </>
  );
};

export default Summary;