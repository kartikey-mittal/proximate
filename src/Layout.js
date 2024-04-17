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
const Layout = () => {
  console.log(Router);
  return (
    <div>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/test" element={<Test />} />
          <Route path="/c" element={<StackedBarChart />} />
          <Route path="/cl" element={<Calendar />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/d" element={<ProjectDetails />} />
          <Route path="/team" element={<Team />} />
        </Routes>
     
    </div>
  );
};

export default Layout;