import React, { useState } from "react";
import insta_icon from "./images/insta-icon.png";
import github_icon from "./images/github-icon.png";
import linkedin_icon from "./images/linkedin-icon.png";

function Contact() {
  const [senderName, setSenderName] = useState("");
  const [senderMsg, setSenderMsg] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [senderSubject, setSenderSubject] = useState("");

  function handleSubmit() {
    const templateId = "template_KeL9SE3G";

    sendFeedback(templateId, {
      message_html: senderMsg,
      subject_html: senderSubject,
      from_name: senderName,
      reply_to: senderEmail
    });
  }

  function sendFeedback(templateId, variables) {
    window.emailjs
      .send("gmail", templateId, variables)
      .then(res => {
        console.log("Email successfully sent!");
      })
      .catch(err =>
        console.error(
          "Oh well, you failed. Here some thoughts on the error that occured:",
          err
        )
      );
  }

  return (
    <div className="wrapper-page-content contact-page">
      <p className="page-title m-black-font">CONTACT</p>
      <div className="wrapper-form">
        <form className="mail-form">
          <input
            type="text"
            placeholder="Full Name"
            onChange={e => setSenderName(e.target.value)}
            value={senderName}
          />
          <input
            type="text"
            placeholder="Email"
            onChange={e => setSenderEmail(e.target.value)}
            value={senderEmail}
          />
          <input
            type="text"
            placeholder="Subject"
            onChange={e => setSenderSubject(e.target.value)}
            value={senderSubject}
          />
          <textarea
            placeholder="Message"
            onChange={e => setSenderMsg(e.target.value)}
            value={senderMsg}
          />
          <button type="submit" onClick={() => handleSubmit()}>
            Send email!
          </button>
        </form>
      </div>
      <div className="wrapper-icons">
        <a target="_blank" href="https://www.instagram.com/friendcislol/">
          <img
            className="contact-profile-icon"
            src={insta_icon}
            alt="Insta Icon"
          />
        </a>
        <a target="_blank" href="https://github.com/francislow">
          <img
            className="contact-profile-icon"
            src={github_icon}
            alt="Github Icon"
          />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/francis-low-bb1b4079/"
        >
          <img
            className="contact-profile-icon"
            src={linkedin_icon}
            alt="Linkedin Icon"
          />
        </a>
      </div>
    </div>
  );
}

export default Contact;
