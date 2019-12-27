import React from "react";

import ContactForm from "./ContactForm"
import insta_icon from "./images/insta-icon.png";
import github_icon from "./images/github-icon.png";
import linkedin_icon from "./images/linkedin-icon.png";

function Contact() {
  return (
    <div className="wrapper-page-content contact-page">
      <p className="page-title m-black-font">CONTACT ME!</p>
      <ContactForm />
      <div className="wrapper-icons">
        <a target="_blank" href="https://www.instagram.com/friendcislol/">
          <img
            className="contact-profile-icon"
            src={insta_icon}
            alt="Insta Icon" />
        </a>
        <a target="_blank" href="https://github.com/francislow">
          <img
            className="contact-profile-icon"
            src={github_icon}
            alt="Github Icon" />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/francis-low-bb1b4079/"
        >
          <img
            className="contact-profile-icon"
            src={linkedin_icon}
            alt="Linkedin Icon" />
        </a>
      </div>
    </div>
  );
}

export default Contact;
