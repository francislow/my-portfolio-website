import React, { useState, useRef } from "react";

function ContactForm() {
  const [senderName, setSenderName] = useState("");
  const [senderMsg, setSenderMsg] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [senderSubject, setSenderSubject] = useState("");
  const [modelBoxText, setModelBoxText] = useState("");

  const modelRef = useRef(null);
  function handleSubmit(e) {
    e.preventDefault();

    const templateId = "template_KeL9SE3G";
    sendFeedBack(templateId, {
      message_html: senderMsg,
      subject_html: senderSubject,
      from_name: senderName,
      reply_to: senderEmail
    });

    refreshPage();
  }

  function sendFeedBack(templateId, variables) {
    window.emailjs
      .send("gmail", templateId, variables)
      .then(res => {
        activateResultNotification("Email successfully sent!");
      })
      .catch(err => {
        console.error(
          "Oh well, you failed. Here some thoughts on the error that occured:",
          err
        );
        activateResultNotification("Error, email was not sent successfully");
      });
  }

  function activateResultNotification(displayText) {
    setModelBoxText(displayText);
    setModelVisibility(true);
  }

  function setModelVisibility(isVisible) {
    isVisible ? 
    modelRef.current.className = modelRef.current.className.replace(
      "invisible",
      "visible"
    ) : 
    modelRef.current.className = modelRef.current.className.replace(
      "visible",
      "invisible"
    )
  }

  function refreshPage() {
    window.location.href = "https://francislow.netlify.com/#contact"
  }

  return (
    <>
      <div className="wrapper-form">
        <form>
          <input
            className="form-detail"
            type="text"
            placeholder="Name"
            onChange={e => setSenderName(e.target.value)}
            value={senderName}
          />
          <input
            className="form-detail"
            type="text"
            placeholder="Email"
            onChange={e => setSenderEmail(e.target.value)}
            value={senderEmail}
          />
          <input
            className="form-detail"
            type="text"
            placeholder="Subject"
            onChange={e => setSenderSubject(e.target.value)}
            value={senderSubject}
          />
          <textarea
            className="form-detail form-message"
            type="text"
            placeholder="Message"
            onChange={e => setSenderMsg(e.target.value)}
            value={senderMsg}
          />
          <button
            className="send-email-btn"
            type="submit"
            onClick={e => handleSubmit(e)}
          >
            Send email
          </button>
        </form>
      </div>
      <div ref={modelRef} className="email-model-box invisible">
        <span onClick={() => setModelVisibility(false)}>&times;</span>
        {modelBoxText}
      </div>
    </>
  );
}

export default ContactForm;
