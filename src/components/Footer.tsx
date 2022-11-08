import React from 'react';
import instagram from '../images/logos/instagram.svg';
import email from '../images/logos/email.svg';
import { Link } from 'react-scroll';

function Footer() {
  return (
    <div className="footer">
      <div className="btn-container">
        <button type="button">
          <Link to="header" spy={true} smooth={true}>
            Back Top
          </Link>
        </button>
      </div>
      <div className="link-container">
        <a href="https://github.com/gautedl" target="_blank" rel="noreferrer">
          <img
            className="footer-img"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            alt="github"
          />
        </a>
        <a
          href="https://www.linkedin.com/feed/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="footer-img"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg"
            alt="linkedin"
          />
        </a>
        <a
          href="https://instagram.com/gautelorentsen"
          target="_blank"
          rel="noreferrer"
        >
          <img className="footer-img" src={instagram} alt="instagram" />
        </a>
        <a href="mailto:gudelo97@gmail.com">
          <img className="footer-img" src={email} alt="e-mail" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
