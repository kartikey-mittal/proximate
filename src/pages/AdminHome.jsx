import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import { db } from '../Firebase';
import { collection, getDocs } from 'firebase/firestore';
import { FaTasks ,FaMoneyBillWave } from "react-icons/fa";
import { MdTask } from "react-icons/md";
import StackedBarChart from "./StackedBarChart";
const Card = ({ icon, title, amount, iconBackgroundColor }) => {
    return (
      <Paper elevation={24} style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          backgroundColor: "#fff",
          padding: "10px",
          borderRadius: "0px",
          width: "200px",
          boxShadow: "1px 1px 1px 1px rgba(0.5, 0, 0, 0.1)",
          marginLeft: "20px",
          marginTop: '30px',
          marginRight:'30px'
        }}>
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
        </Paper>
    );
  };


const AdminHome = () => {
  // Sample data array containing image URLs, names, and progress widths
  const data = [
    { imgSrc: "https://firebasestorage.googleapis.com/v0/b/snipify-bda1e.appspot.com/o/images%2Fkartik-pic.jpg?alt=media&token=2a535c2b-3c4b-49f2-8a63-0532265b892d", name: "Kartikey Mittal", progress: 60 },
    { imgSrc: "https://firebasestorage.googleapis.com/v0/b/snipify-bda1e.appspot.com/o/images%2Fpraveen.jpg?alt=media&token=b3c333ad-e675-447f-9482-73fef322f879", name: "Praveen Tomar", progress: 40 },
    { imgSrc: "https://firebasestorage.googleapis.com/v0/b/snipify-bda1e.appspot.com/o/images%2Fkaif.jpg?alt=media&token=0afe78a9-3ead-421c-930e-c73092f83732", name: "Kaif", progress: 30 },
    // Add more data items as needed
  ];


  const cardsData = [
    { icon: <FaMoneyBillWave style={{ fontSize: "30px", color: "white" }} />, title: "Tasks", amount: `7`, iconBackgroundColor: "#36b399" },
    { icon: <MdTask style={{ fontSize: "30px", color: "white" }} />, title: "Projects", amount: 5, iconBackgroundColor: "#0086d9" },
    { icon: <MdTask style={{ fontSize: "30px", color: "white" }} />, title: "Budget", amount: `₹500`, iconBackgroundColor: "#0086d9" },
    { icon: <MdTask style={{ fontSize: "30px", color: "white" }} />, title: "Members", amount: 4, iconBackgroundColor: "#0086d9" }
    // Add more data as needed
  ];

  return (
    <>
      <NavBar />
      <div
        style={{
          backgroundColor: "#F5F5F5",
          height: "100%",
          width: "100%",
          display: "block",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            height: "100vh",
          }}
        >




<div style={{ width: "60%", height: "100%", backgroundColor: "transparent", padding: '15px' }}>
 
{/* const Card = ({ icon, title, amount, iconBackgroundColor }) => {
  return ( */}
  <div style={{display:'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', backgroundColor:'transparent', padding: '20px'}}>
    {cardsData.map((data, index) => (
        <Card key={index} icon={data.icon} title={data.title} amount={data.amount} iconBackgroundColor={data.iconBackgroundColor} />
    ))}
</div>
<div style={{marginTop:20,alignSelf:'center',marginLeft:20,alignItems:'center'}}><StackedBarChart/></div>

      
  {/* );
}; */}

</div>









          <div style={{ flex: "1", height: "100%", backgroundColor: "transparent" }}>
            {/* Render Paper components dynamically */}

            <div style={{ backgroundColor: "#e9f9e2", margin: 15, padding: 2, borderRadius: 0, boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)" ,height:'90%' }}>
            {data.map((item, index) => (
              <Paper key={index} elevation={3} style={{ borderRadius: 10, padding: 20, margin: 20, display: 'flex', alignItems: 'center' }}>
                <Avatar alt={item.name} src={item.imgSrc} />
                <div style={{ width: '100%' }}>
                  <span style={{ fontFamily: 'DMM', marginLeft: '10px', fontSize: 19 }}>{item.name}</span>
                  <div style={{ width: '80%', height: '5px', backgroundColor: 'black', borderRadius: '4px', overflow: 'hidden', marginLeft: '10px' }}>
                    <div style={{ width: `${item.progress}%`, height: '100%', backgroundColor: 'blue' }}></div>
                  </div>
                </div>
              </Paper>
            ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminHome;
