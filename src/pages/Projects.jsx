import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import ProjectCard from "../components/ProjectCard";
import { db } from "../Firebase";
import { collection, getDocs,  collectionGroup } from 'firebase/firestore';
import {  useNavigate } from 'react-router-dom'; // Import useNavigate hook
const Projects = () => {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate hook
  useEffect(() => {
    const fetchData = async () => {
      try {
        const projectsCollection = collection(db, 'projects');
        const projectsSnapshot = await getDocs(projectsCollection);
        const projectsData = [];

        for (const doc of projectsSnapshot.docs) {
          const projectData = doc.data();
          console.log(projectData.name);

          // Fetch tasks from all collections named 'tasks'
          const tasksCollection = collectionGroup(db, 'tasks');
          const tasksSnapshot = await getDocs(tasksCollection);
          const totalTasks = tasksSnapshot.docs.length;
          const completedTasks = tasksSnapshot.docs.filter(task => task.data().status).length;
          const progress = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

          projectsData.push({
            id: doc.id,
            name: projectData.name,
            progress: progress,
            memberImages: projectData.members, // Assuming members array consists of email ids
          });

         
        }

        setProjects(projectsData);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchData();
  }, []);

  const handleProjectClick = (projectId) => {
    alert(`Clicked project with ID: ${projectId}`);
    navigate(`/project/${projectId}`); 
    // You can perform additional actions here, such as navigating to a different page
  };

  const handleClick =()=>{
    navigate('/create'); // Navigate to '/connect'
  }
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
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px",
              backgroundColor: "#fff",
            }}
          >
            <div
              style={{
                fontWeight: "bold",
                fontSize: "1.5em",
                marginLeft: "10px",
                fontFamily: "DMM",
              }}
            >
              Project
            </div>
            <button
              style={{
                display: "flex",
                alignItems: "center",
                padding: "5px 10px",
                backgroundColor: "#6777ef",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                marginRight: "20px",
                fontFamily: "DMM",
              }}
              onClick={handleClick}
            >
              New Project
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#fff"
                viewBox="0 0 16 16"
                style={{ marginLeft: "10px" }}
              >
                <path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zm0 1a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11zM8 5a.5.5 0 0 0-1 0v2.5H4a.5.5 0 0 0 0 1h2.5V11a.5.5 0 0 0 1 0V8.5H12a.5.5 0 0 0 0-1H8V5z" />
              </svg>
            </button>
          </div>

          {/* PROJECT CARD GRID 2 X2 SCROLLABLE below div */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: "20px",
              padding: "20px",
              overflowY: "auto", // Enable vertical scrolling
              maxHeight: "calc(100vh - 64px)", // Adjust to account for NavBar height
              alignContent: "center",
              justifyItems: "center",
            }}
          >
            {/* Render Project Cards */}
            {projects.map((project, index) => (
              <ProjectCard
                key={index} // Ensure unique key for each component
                projectName={project.name}
                progress={project.progress}
                memberImages={project.memberImages}
                onClick={() => handleProjectClick(project.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
