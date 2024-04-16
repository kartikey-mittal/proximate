import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "./pages/Home";
import Team from "./pages/Team";
import Test from "./pages/Test";

const Layout = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
         
          <Route path="/team" element={<Team />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Layout;