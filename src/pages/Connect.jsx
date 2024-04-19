import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import { IoCall } from "react-icons/io5";
import { db } from "../Firebase";
import { collection, getDocs } from 'firebase/firestore'; // Update the path to your firebase configuration

const Connect = () => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersCollection = collection(db, 'users');
        const usersSnapshot = await getDocs(usersCollection);
        const usersData = usersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setPersons(usersData);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchData();
  }, []);

  const handleCallClick = (id) => {
    alert(`Calling person with ID ${id}`);
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "#F5F5F5",
          height: "100%",
          width: "100%",
          display: "block",
        }}
      >
        <div style={{ width: "100%", height: "100vh" }}>
          <NavBar />
          <div
            style={{ display: "flex", flexDirection: "row", height: "100%" }}
          >
            <div
              style={{ width: "50%", backgroundColor: "white", height: "100%" }}
            >
              <div
                style={{
                  width: "90%",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  padding: "30px 30px",
                  backgroundColor: "#FEF7DB",
                  marginTop: "30px",
                  marginBottom: "50px",
                  height: "50px",
                  borderRadius: "10px",
                  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                  alignSelf: "center",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                <span style={{ flex: 1, fontSize: "18px", fontFamily: "DMM" }}>
                  Connect Everyone
                </span>
                <button
                  style={{
                    backgroundColor: "#31CD37",
                    color: "#fff",
                    fontFamily: "DMM",
                    borderRadius: "10px",
                  }}
                  className="px-5 py-1"
                >
                  Connect
                </button>
              </div>

              {/* Map over persons array and render Paper component for each person */}
              {persons.map((person) => (
                <div key={person.id}>
                  <Paper
                    elevation={3}
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      padding: "10px",
                      borderRadius: "10px",
                      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                      margin: "30px",
                      borderColor: "#2583EF",
                      borderWidth: "1px",
                    }}
                  >
                    <Avatar
                      alt={person.name}
                      src={person.img} 
                    />
                    <span
                      style={{
                        marginLeft: "10px",
                        marginRight: "auto",
                        fontFamily: "DMM",
                      }}
                    >
                      {person.name}
                    </span>
                    <IoCall
                      style={{ color: "#2583EF", fontSize: "30px", cursor: "pointer" }}
                      onClick={() => handleCallClick(person.id)}
                    />
                  </Paper>
                </div>
              ))}
            </div>
            <div style={{ backgroundColor: "#e5e5e5", flexGrow: 1, backgroundImage: "url('https://img.freepik.com/premium-vector/group-people-from-countries-talking-via-videoconference-online-meeting-via-video-conference-vector-illustration-flat-style_612079-359.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1713139200&semt=ais')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Connect;
