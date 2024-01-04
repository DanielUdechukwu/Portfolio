import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";

const App = () => {
  return (
    // <Home />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default App;
