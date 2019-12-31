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
      <div className="fixed-bg">
        <img src={require("./images/yellowbackground.jpg")} alt="fixed-bg" />
      </div>
      <Navbar />
      <div className="full-height" id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div className="full-height" id="projects">
        <Project />
      </div>
      <div className="full-height" id="contact">
        <Contact />
      </div>
    </>
  );
}

export default App;
