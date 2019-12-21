import React from "react";
import insta_icon from "./images/insta-icon.png";
import github_icon from "./images/github-icon.png";
import linkedin_icon from "./images/linkedin-icon.png";

function Contact() {
  return (
    <div class="wrapper-page-content contact-page">
      <p class="page-title m-black-font">CONTACT</p>
      <div class="wrapper-form">FORM SECTION</div>
      <div class="wrapper-icons">
        <a target="_blank" href="https://www.instagram.com/friendcislol/"><img class="contact-profile-icon" src={insta_icon} alt="Insta Icon"/></a>
        <a target="_blank" href="https://github.com/francislow"><img class="contact-profile-icon" src={github_icon} alt="Github Icon"/></a>
        <a target="_blank" href="https://www.linkedin.com/in/francis-low-bb1b4079/"><img class="contact-profile-icon" src={linkedin_icon} alt="Linkedin Icon"/></a>
      </div>
    </div>
  );
}

export default Contact;
