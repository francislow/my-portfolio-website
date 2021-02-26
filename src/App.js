import React from "react";

import Home from "./Home";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";
import Navbar from "./Navbar";

import "./app.css";

function App() {
  return (
    <>
      <div className="fixed-bg" ></div>
      <Navbar />
      <div className="full-height" id="home" style={{backgroundColor: "#EDC949"}}>
        <Home />
      </div>
      <div id="about" style={{backgroundColor: "rgb(255, 253, 210)"}}>
        <About />
      </div>
      <div id="projects" style={{backgroundColor: "#EDC949"}}>
        <Project />
      </div>
      <div className="full-height" id="contact" style={{backgroundColor: "rgb(255, 253, 210)"}}>
        <Contact />
      </div>
    </>
  );
}

export default App;
