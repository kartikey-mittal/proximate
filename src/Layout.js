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
import Login from "./pages/Signup";
import Expense from "./pages/Expense";
const Layout = () => {
  console.log(Router);
  return (
    <div>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/video" element={<VoiceChat />} />
          <Route path="/team" element={<TeamView />} />
          <Route path="/login" element={<Login />} />
          <Route path="/test" element={<Test />} />
          <Route path="/c" element={<StackedBarChart />} />
          <Route path="/cl" element={<Calendar />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/d" element={<ProjectDetails />} />
          <Route path="/team" element={<Team />} />
          <Route path="/expense" element={<Expense />} />
        </Routes>
     
    </div>
  );
};

export default Layout;