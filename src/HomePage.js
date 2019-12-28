import React, { useEffect } from "react";

import Home from "./Home";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";
import Navbar from "./Navbar";

function HomePage() {
//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   function handleScroll() {
//       if () {

//       }
//       console.log("i scroll u")
//   }

  return (
    <>
      <div className="fixed-bg">
        <img src={require("./images/yellowbackground.jpg")} />
      </div>
      <Navbar />
      <div className="full-height" id="home">
        <Home />
      </div>
      <div className="full-height" id="about">
        <About />
      </div>
      <div className="full-height" id="portfolio">
        <Project />
      </div>
      <div className="full-height" id="contact">
        <Contact />
      </div>
    </>
  );
}

export default HomePage;
