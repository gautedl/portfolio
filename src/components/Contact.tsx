import React, { useRef, useState } from 'react';
import '../styles/general.scss';
import { send } from 'emailjs-com';
import { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } from '../KEYS/KEYS';

function Contact() {
  const [toSend, setToSend] = useState({
    from_name: '',
    reply_to: '',
    from_subject: '',
    message: '',
  });
  const form = useRef() as React.MutableRefObject<HTMLFormElement>;

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const onSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    send(SERVICE_ID, TEMPLATE_ID, toSend, PUBLIC_KEY)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setToSend({
          from_name: '',
          reply_to: '',
          from_subject: '',
          message: '',
        });
      })
      .catch((err) => {
        console.log('Failed...', err);
      });
  };

  return (
    <div className="contact-section">
      <div className="contact-container">
        <div className="title-container">
          <h1>Contact Me</h1>
        </div>
        <div className="contact-form">
          <form ref={form} className="inputs">
            <input
              type="text"
              name="from_name"
              placeholder="Name"
              aria-label="Name"
              value={toSend.from_name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="reply_to"
              placeholder="E-mail"
              aria-label="Email"
              value={toSend.reply_to}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="from_subject"
              placeholder="Subject"
              aria-label="Subject"
              value={toSend.from_subject}
              onChange={handleChange}
              required
            />
            <textarea
              placeholder="Message"
              name="message"
              aria-label="message"
              value={toSend.message}
              onChange={handleChange}
              required
            />
            <div className="btn-container">
              <button type="submit" onClick={onSubmit}>
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
