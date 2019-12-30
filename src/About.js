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
        <div className="wrapper-profile-skills">
          <div className="wrapper-skills-content">
            <p>TECHNICAL SKILLS</p>
            <div className="skills-container">
              <div class="flex-item">Android</div>
              <div class="flex-item">Android SDK</div>
              <div class="flex-item">Java</div>
              <div class="flex-item">Kotlin</div>
              <div class="flex-item">JavaScript</div>
              <div class="flex-item">HTML5</div>
              <div class="flex-item">CSS3</div>
              <div class="flex-item">React</div>
            </div>
          </div>
        </div>
        <div className="wrapper-profile-intro">
          <p className="intro-header">Who am I?</p>
          <p>
            I am a student from{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://www.nus.edu.sg/"
            >
              National University of Singapore
            </a>
            , passionate about application development. I aspire to be a
            mobile/web developer in future. I love the feeling of creating
            applications that add value to others' lives. 
            
            I am a firm
            believer that hard work, clear direction and good execution are the
            three keys to succeed in anything in life and strive to always
            practise them in my work. I am an aspiring android app developer who
            enjoys learning and creating applications. I love the feeling of
            creating something out of nothing and get satisfaction to see the
            applications that I have created benefit others. With a strong
            interest in mobile apps development, I am looking to carve my career
            in this area.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
