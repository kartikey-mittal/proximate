import React from "react";
import ProjectCard from "../components/ProjectCard";
import NavBar from "../components/NavBar";
const Projects = () => {
  const projectName = "Sample Project";
  const progress = 75;

  const memberImages = [
    "https://mui.com/static/images/avatar/1.jpg",
    "https://mui.com/static/images/avatar/2.jpg",
    "https://mui.com/static/images/avatar/3.jpg",
    "https://mui.com/static/images/avatar/4.jpg",
  ];
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
              alignContent:'center',
              justifyItems:'center'
            }}
          >
            {/* Project Cards */}
            <ProjectCard
              projectName={projectName}
              progress={progress}
              memberImages={memberImages}
            />
            <ProjectCard
              projectName={projectName}
              progress={progress}
              memberImages={memberImages}
            />
            <ProjectCard
              projectName={projectName}
              progress={progress}
              memberImages={memberImages}
            />
            <ProjectCard
              projectName={projectName}
              progress={progress}
              memberImages={memberImages}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
