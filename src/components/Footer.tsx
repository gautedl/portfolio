import React from 'react';
import instagram from '../images/logos/instagram.svg';
import email from '../images/logos/email.svg';

function Footer() {
  return (
    <div className="footer">
      <div className="btn-container">
        <button type="button">Back to Top</button>
      </div>
      <div className="link-container">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
          alt="github"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg"
          alt="linkedin"
        />
        <img src={instagram} alt="instagram" />
        <img src={email} alt="e-mail" />
      </div>
    </div>
  );
}

export default Footer;
