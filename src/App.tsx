import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

import Pricing from "./pages/Pricing" ;
import Projects from "./pages/Projects" ;
import Contact from "./pages/Contact" ;

import Navbar from "./components/Navbar";
import ScrollToTop from "./hooks/ScrollToTop";
import "./styles/app.css";

const App: React.FC = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/pricing" element={<Pricing />} />

        <Route path="/Projects" element={<Projects />} />

        <Route path="/contact" element={<Contact />} />
        
      </Routes>
    </>
  );
};

export default App;
