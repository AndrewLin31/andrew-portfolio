import React, { useState } from "react";
import "./Contacts.css";

const Contacts = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const validateEmail = (e) => {
    // simple regex
    return /\S+@\S+\.\S+/.test(e);
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setErrorMsg("");

    if (!name.trim() || !email.trim() || !message.trim()) {
      setErrorMsg("Please fill in all fields.");
      setStatus("error");
      return;
    }
    if (!validateEmail(email)) {
      setErrorMsg("Please enter a valid email address.");
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("message", message);
      formData.append("_subject", "New message from portfolio contact form");

      const res = await fetch("https://formsubmit.co/ajax/andrewlin368682@gmail.com", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
        setErrorMsg(data.message || "Failed to send message");
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message || "Network error");
    }
  };

  return (

    <div id="contacts" className="contacts-container">
      <h1 className="contacts-title">Get in Touch</h1>
      <div className="contacts-section">
        <div className="contacts-left">
          <h1>Let's talk</h1>
          <p className="contacts-text">
            I’d love to connect! Here’s how you can reach me:
          </p>
          <div className="contacts-info">
            <p><strong>Email:</strong> <a href="mailto:andrewlin368682@gmail.com">andrewlin368682@gmail.com</a></p>
            <p><strong>Phone:</strong> (972) 351-7026</p>
            <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/andrewl31" target="_blank" rel="noopener noreferrer"> linkedin.com/in/andrewl31</a></p>
            <p><strong>Location:</strong> Lowell, MA, USA</p>
          </div>
        </div>
        <form className="contacts-right" onSubmit={handleSubmit}>
          <label htmlFor="contact-name"> Your Name </label>
          <input id="contact-name" name="name" type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter your name" />
          <label htmlFor="contact-email"> Your Email </label>
          <input id="contact-email" name="email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your email" />
          <label htmlFor="contact-message"> Message </label>
          <textarea id="contact-message" name="message" rows="8" value={message} onChange={(e)=>setMessage(e.target.value)} placeholder="Write your message"></textarea>
          <button type="submit" className="contacts-button" disabled={status==="sending"}>{status === "sending" ? "Sending..." : "Send Message"}</button>

          <div aria-live="polite" className={`contacts-status ${status}`}>
            {status === "success" && <div className="status-success">Message sent — I will reply soon.</div>}
            {status === "error" && <div className="status-error">{errorMsg || "There was a problem sending your message."}</div>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
