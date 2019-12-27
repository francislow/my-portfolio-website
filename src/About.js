import React from "react";
import mypicture from "./images/mypicture.png";
import smiley from "./images/smiley.png";

function About() {
  return (
    <>
      <div className="wrapper-page-content about-page">
        <p className="page-title m-black-font">ABOUT ME!</p>
        <img
          className="profile-img desktop-only"
          src={mypicture}
          alt="Francis' Picture"
        />
        <img className="smiley-img mobile-only" src={smiley} alt="Smiley Image" />
        <div className="wrapper-intro">
          <p className="moon-child-font">
          I am a student from{" "}
            <a target="_blank" href="http://www.nus.edu.sg/">
              National University of Singapore
            </a>
            , passionate about application development, aspiring to be an
            android app developer in future. I love the feeling of creating something
            out of nothing. It gives me much satisfaction knowing that I have the ability 
            to bring merely an idea to life. 
          </p>
        </div>
        <p className="call-for-action-text m-black-font">
          HIT ME UP FOR APPLICATION DEVELOPMENT PROJECTS!!
        </p>
      </div>
    </>
  );
}

export default About;
