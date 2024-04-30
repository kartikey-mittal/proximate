import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "./pages/Home";
import Team from "./pages/Team";
import Test from "./pages/Test";
import StackedBarChart from "./pages/StackedBarChart";
import Calendar from "./pages/Calender";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Connect from "./pages/Connect";
import VoiceChat from "./pages/VoiceChat";
import TeamView from "./pages/TeamView";
import Login from "./pages/Login";
import Expense from "./pages/Expense";
import Signup from "./pages/Signup";
import RegFace from "./pages/RegFace";
import Room from "./pages/Room";
import ChatBot from "./pages/ChatBot";
import CreateProject from "./pages/CreateProject";
import AdminHome from "./pages/AdminHome";
import CreateTask from "./pages/CreateTask";
const Layout = () => {
  console.log(Router);
  return (
    <div>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateProject />} />
          <Route path="/createTask" element={<CreateTask />} />
          <Route path="/admin" element={<AdminHome />} />
          <Route path="/bot" element={<ChatBot />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/room/:roomId" element={<Room />} />
          <Route path="/video" element={<VoiceChat />} />
          <Route path="/team" element={<TeamView />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/regface" element={<RegFace />} />
          <Route path="/test" element={<Test />} />
          <Route path="/c" element={<StackedBarChart />} />
          <Route path="/cl" element={<Calendar />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:projectId" element={<ProjectDetails />} />
          <Route path="/team" element={<Team />} />
          <Route path="/expense" element={<Expense />} />
        </Routes>
     
    </div>
  );
};

export default Layout;