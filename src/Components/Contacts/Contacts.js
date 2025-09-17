import React from "react";
import "./Contacts.css";

const Contacts = () => {
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
        <form className="contacts-right">
          <label htmlFor=""> Your Name </label>
          <input type="text" placeholder="Enter your name" />
          <label htmlFor=""> Your Email </label>
          <input type="email" placeholder="Enter your email" />
          <label htmlFor=""> Message </label>
          <textarea name="message" rows="8" placeholder="Write your message"></textarea>
          <button type="submit" className="contacts-button">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
