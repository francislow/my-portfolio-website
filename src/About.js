import React from "react";
import mypicture from "./images/profilepicture.png";
import smiley from "./images/smiley.png";

function About() {
  return (
    <>
      <div className="about-page">
        <div className="wrapper-profile-img">
          <img className="profile-img" src={mypicture} alt="profilepic" />
        </div>
        <div className="wrapper-profile-intro">
          <p className="intro-header">Who am I?</p>
          <p>
            I am a final year student at{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://www.nus.edu.sg/"
            >
              National University of Singapore
            </a>
            , passionate about application development. I enjoy learning new technology and
            love the feeling of creating applications. As an aspiring full-stack developer, it 
            is the thrill of creating something impactful that gives me a sense of fulfillment. 
            It gives me much satisfaction seeing a product take shape from merely an idea to its 
            final form. Hence, I am looking to carve my career in this area. 
            <br />
            <br />I firmly believe there are three key elements to excel in any work we do; a 
            clear sense of direction, good execution and facing obstacles with grit.
          </p>

          <div className="wrapper-skills-content">
            <p>TECHNICAL SKILLS</p>
            <div className="skills-container">
              <div>Android</div>
              <div>Android SDK</div>
              <div>Java</div>
              <div>Kotlin</div>
              <div>JavaScript</div>
              <div>HTML5</div>
              <div>CSS3</div>
              <div>React</div>
              <div>Node.js</div>
              <div>Express</div>
              <div>REST API</div>
              <div>MongoDB</div>
              <div>NativeScript Vue</div>
              <div>Vue</div>
              <div>Firebase Services</div>
              <div>AWS Services</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
