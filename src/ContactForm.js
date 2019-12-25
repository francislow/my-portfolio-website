import React, { useState } from "react";

function ContactForm() {
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
      <div className="wrapper-form">
        <form>
          <input
            className="form-detail"
            type="text"
            placeholder="Full Name"
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
          <button className="send-email-btn" type="submit" onClick={() => handleSubmit()}>
            Send email
          </button>
        </form>
      </div>
  );
}

export default ContactForm;
