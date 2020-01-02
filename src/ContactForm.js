import React, { useState, useEffect } from "react";

function ContactForm() {
  const [senderName, setSenderName] = useState("");
  const [namePlaceholder, setNamePlaceholder] = useState("Name");
  const [nameColour, setNameColour] = useState("");

  const [senderMsg, setSenderMsg] = useState("");
  const [msgPlaceholder, setMsgPlaceholder] = useState("Message");
  const [msgColour, setMsgColour] = useState("");

  const [senderEmail, setSenderEmail] = useState("");
  const [emailPlaceholder, setEmailPlaceholder] = useState("Email");
  const [emailColour, setEmailColour] = useState("");

  const [senderSubject, setSenderSubject] = useState("");
  const [subjectPlaceholder, setSubjectPlaceholder] = useState("Subject");
  const [subjectColour, setSubjectColour] = useState("");

  const [modelBoxText, setModelBoxText] = useState("");
  const [modelVisibility, setModelVisiblility] = useState("invisible");

  useEffect(() => {
    if (senderName !== "") {
      setNamePlaceholder("Name");
      setNameColour("");
    }
    if (senderEmail !== "") {
      setEmailPlaceholder("Email");
      setEmailColour("");
    }
    if (senderMsg !== "") {
      setMsgPlaceholder("Message");
      setMsgColour("");
    }
    if (senderSubject !== "") {
      setSubjectPlaceholder("Subject");
      setSubjectColour("");
    }
  }, [senderName, senderSubject, senderMsg, senderEmail]);

  function handleSubmit(e) {
    e.preventDefault();

    let isFormCompleted = true;
    if (senderName === "") {
      setNamePlaceholder("Please include your name");
      setNameColour("red");
      isFormCompleted = false;
    }
    if (senderEmail === "") {
      setEmailPlaceholder("Please include your email");
      setEmailColour("red");
      isFormCompleted = false;
    }
    if (senderMsg === "") {
      setMsgPlaceholder("Please include a Message");
      setMsgColour("red");
      isFormCompleted = false;
    }
    if (senderSubject === "") {
      setSubjectPlaceholder("Please include a subject");
      setSubjectColour("red");
      isFormCompleted = false;
    }

    if (isFormCompleted === true) {
      const templateId = "template_KeL9SE3G";
      sendFeedBack(templateId, {
        message_html: senderMsg,
        subject_html: senderSubject,
        from_name: senderName,
        reply_to: senderEmail
      });
      refreshPage();
    }
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
        activateResultNotification("Error, email was not sent successfully.");
      });
  }

  function activateResultNotification(displayText) {
    setModelBoxText(displayText);
    setModelVisiblility("visible");
  }

  function refreshPage() {
    window.location.href = "https://francislow.netlify.com/#contact";
  }

  return (
    <>
      <div className="wrapper-form">
        <form>
          <input
            className={`form-detail ${nameColour}`}
            type="text"
            placeholder={namePlaceholder}
            onChange={e => setSenderName(e.target.value)}
            value={senderName}
          />
          <input
            className={`form-detail ${emailColour}`}
            type="text"
            placeholder={emailPlaceholder}
            onChange={e => setSenderEmail(e.target.value)}
            value={senderEmail}
          />
          <input
            className={`form-detail ${subjectColour}`}
            type="text"
            placeholder={subjectPlaceholder}
            onChange={e => setSenderSubject(e.target.value)}
            value={senderSubject}
          />
          <textarea
            className={`form-detail form-message ${msgColour}`}
            type="text"
            placeholder={msgPlaceholder}
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
      <div className={`email-model-box ${modelVisibility}`}>
        <span onClick={() => setModelVisiblility("invisible")}>&times;</span>
        {modelBoxText}
      </div>
    </>
  );
}

export default ContactForm;
