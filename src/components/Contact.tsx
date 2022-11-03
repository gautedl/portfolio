import React from 'react';
import '../styles/general.scss';

function Contact() {
  return (
    <div className="contact-section">
      <div className="contact-container">
        <div className="title-container">
          <h1>Contact Me</h1>
        </div>
        <div className="contact-form">
          <div className="inputs">
            <input type="text" placeholder="Name" aria-label="Name" required />
            <input
              type="email"
              placeholder="E-mail"
              aria-label="Email"
              required
            />
            <input
              type="text"
              placeholder="Subject"
              aria-label="Subject"
              required
            />
            <textarea placeholder="Message" aria-label="message" required />
            <div className="btn-container">
              <button type="button">Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
