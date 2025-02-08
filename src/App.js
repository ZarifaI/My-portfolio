import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Education from "./components/Education";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/education" element={<Education />} />
      </Routes>
    </Router>
  );
}

export default App;
