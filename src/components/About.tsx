import React from 'react';
import '../styles/general.scss';
import headshot from '../images/dalle-pic.png';
import instagram from '../images/logos/instagram.svg';
import email from '../images/logos/email.svg';

function About() {
  return (
    <div className="about-section">
      <div className="about-container" id="about">
        <div className="about">
          <div className="title-container">
            <h1>About</h1>
          </div>
          <img className="headshot" src={headshot} alt="headshot" />
          <span>
            I have always had an interest for tech and science.
            <br />
            <br />
            The past year I decided to take web development more seriously,
            starting with frontend with the goal of going fullstack. I had
            gotten very interested in crypto over the prior year, leading me to
            my ultimate goal of finding a web3 job.
          </span>
          <div className="socials-container">
            <a
              href="https://github.com/gautedl"
              target="_blank"
              rel="noreferrer"
            >
              <img
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
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg"
                alt="linkedin"
              />
            </a>
            <a
              href="https://instagram.com/gautelorentsen"
              target="_blank"
              rel="noreferrer"
            >
              <img src={instagram} alt="instagram" />
            </a>
            <a href="mailto:gudelo97@gmail.com">
              <img src={email} alt="e-mail" />
            </a>
          </div>
        </div>
        <div
          className="tech-container"
          data-aos="zoom-in-left"
          data-aos-easing="ease-in"
        >
          <img
            title="Javascript"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            alt="javascript"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            alt="HTML"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
            alt="CSS"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            alt="React"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
            alt="SCSS"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
            alt="Typesscript"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
            alt="Firebase"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
            alt="git"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
            alt="vscode"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
            alt="linux"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
            alt="npm"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg"
            alt="webpack"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
