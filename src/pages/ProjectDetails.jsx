import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Summary from "../components/ProjectDetails/Summary";
import Tasks from "../components/ProjectDetails/Tasks";
import Messaging from "../components/ProjectDetails/Messaging";
import Attachments from "../components/ProjectDetails/Attachments";
import { useParams } from "react-router-dom";
import { db } from '../Firebase';
import { doc, getDoc, collection, query, where, getDocs } from 'firebase/firestore';

const ProjectDetails = () => {
  const [activeTab, setActiveTab] = useState("summary");
  const { projectId } = useParams();
  const [attachments, setAttachments] = useState([]);
  const [budget, setBudget] = useState(0);
  const [totaltask, setTotalTask] = useState(0);
  const [members, setMembers] = useState([]);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const projectRef = doc(db, 'projects', projectId);
        const projectSnapshot = await getDoc(projectRef);

        if (projectSnapshot.exists()) {
          const projectData = projectSnapshot.data();

          // Set attachments
          setAttachments(projectData.attachments || []);

          // Set budget
          setBudget(projectData.budget || 0);

          // Set members
          setMembers(projectData.members || []);

          // Fetch tasks
          const tasksRef = collection(db, `projects/${projectId}/tasks`);
          const tasksSnapshot = await getDocs(tasksRef);
          const tasksData = tasksSnapshot.docs.map(doc => doc.data());
          setTotalTask(tasksData.length);
          setTasks(tasksData);
          console.log(tasks);
        } else {
          console.log('No such project document!');
        }
      } catch (error) {
        console.error("Error fetching project data:", error);
      }
    };

    fetchProjectData();
  }, [projectId]);

  // Function to extract attachment names from links
  const extractAttachmentName = (link) => {
    // Find the index of the start of filename
    const startIndex = link.lastIndexOf('/') + 1;
    // Find the index of the end of filename
    const endIndex = link.indexOf('?');
    // Extract the filename
    const filename = link.substring(startIndex, endIndex);
    // Remove any special characters from the filename
    const name = filename.replace(/%20/g, " ").replace(/%2F/g, "/");
    return name;
  };

  // Map attachments to include names extracted from links
  const attachmentsWithNames = attachments.map(link => ({
    name: extractAttachmentName(link),
    link: link
  }));

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div style={{ backgroundColor: "#F5F5F5", height: "100%", width: "100%", display: "block" }}>
      <div style={{ width: "100%", height: "100vh" }}>
        <NavBar />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px", backgroundColor: "#fff" }}>
          <div style={{ fontWeight: "bold", fontSize: "1.5em", marginLeft: "10px", fontFamily: "DMM" }}>Project Name</div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <button style={{ display: "flex", alignItems: "center", padding: "5px 10px", backgroundColor: "#6777ef", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer", marginRight: "10px", fontFamily: "DMM" }}>
              Edit
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" viewBox="0 0 16 16" style={{ marginLeft: "20px" }}>
                <path d="M12.354 3.646a.5.5 0 0 1 0 .708l-8 8a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 0 1 0-.708l8-8a.5.5 0 0 1 .708 0l3.5 3.5zM12.854 2.146l1 1L13.5 4.5l-1-1a.5.5 0 0 1-.146.354l-8 8a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 0 1 0-.708l8-8a.5.5 0 0 1 .708 0l3.5 3.5a.5.5 0 0 1 0 .708l-1 1 1.354 1.354z" />
              </svg>
            </button>
            <button style={{ display: "flex", alignItems: "center", padding: "5px 10px", backgroundColor: "#e3eaef", color: "#000", border: "none", borderRadius: "5px", cursor: "pointer", fontFamily: "DMM" }}>Back</button>
          </div>
        </div>

        {/* Tabs */}
        <div style={{ backgroundColor: 'white', margin: 20 }}>
          <div style={{ marginTop: "10px", display: "flex", paddingTop: 10, margin: 15, paddingLeft: 15, borderBottomWidth: '1px', borderBottomColor: '#e4e4e4' }}>
            {/* Tab Buttons */}
            <div onClick={() => handleTabClick("summary")} style={{ padding: "10px", backgroundColor: activeTab === "summary" ? "#FFF" : "transparent", color: activeTab === "summary" ? "#000" : "#7180ef", cursor: "pointer", borderTop: activeTab === "summary" ? "1px solid #e4e4e4" : "none", borderLeft: activeTab === "summary" ? "1px solid #e4e4e4" : "none", borderRight: activeTab === "summary" ? "1px solid #e4e4e4" : "none", borderTopLeftRadius: "10px", borderTopRightRadius: "10px", fontWeight: activeTab === "summary" ? "bold" : "normal", fontFamily: "DMM" }}>Summary</div>
            <div onClick={() => handleTabClick("attachments")} style={{ padding: "10px", backgroundColor: activeTab === "attachments" ? "#FFF" : "transparent", color: activeTab === "attachments" ? "#000" : "#7180ef", cursor: "pointer", borderTop: activeTab === "attachments" ? "1px solid #e4e4e4" : "none", borderLeft: activeTab === "attachments" ? "1px solid #e4e4e4" : "none", borderRight: activeTab === "attachments" ? "1px solid #e4e4e4" : "none", borderTopLeftRadius: "10px", borderTopRightRadius: "10px", fontWeight: activeTab === "attachments" ? "bold" : "normal", fontFamily: "DMM" }}>Attachments</div>
            <div onClick={() => handleTabClick("tasks")} style={{ padding: "10px", backgroundColor: activeTab === "tasks" ? "#fff" : "transparent", color: activeTab === "tasks" ? "#000" : "#7180ef", cursor: "pointer", borderTop: activeTab === "tasks" ? "1px solid #e4e4e4" : "none", borderLeft: activeTab === "tasks" ? "1px solid #e4e4e4" : "none", borderRight: activeTab === "tasks" ? "1px solid #e4e4e4" : "none", borderTopLeftRadius: "10px", borderTopRightRadius: "10px", fontWeight: activeTab === "tasks" ? "bold" : "normal", fontFamily: "DMM" }}>Tasks</div>
            <div onClick={() => handleTabClick("messaging")} style={{ padding: "10px", backgroundColor: activeTab === "messaging" ? "#FFF" : "transparent", color: activeTab === "messaging" ? "#000" : "#7180ef", cursor: "pointer", borderTop: activeTab === "messaging" ? "1px solid #e4e4e4" : "none", borderLeft: activeTab === "messaging" ? "1px solid #e4e4e4" : "none", borderRight: activeTab === "messaging" ? "1px solid #e4e4e4" : "none", borderTopLeftRadius: "10px", borderTopRightRadius: "10px", fontWeight: activeTab === "messaging" ? "bold" : "normal", fontFamily: "DMM" }}>Messaging</div>
          </div>

          {/* Render Tab Content */}
          {activeTab === "summary" && <Summary budget={budget} tasks={totaltask} />}
          {activeTab === "attachments" && <Attachments attachmentsData={attachmentsWithNames} />}
          {activeTab === "tasks" && <Tasks tasks={tasks} />}
          {activeTab === "messaging" && <Messaging />}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
