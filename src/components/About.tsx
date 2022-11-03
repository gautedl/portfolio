import React from "react";
import '../styles/general.scss';
import headshot from '../images/dalle-pic.png'
import instagram from '../images/logos/instagram.svg'
import email from '../images/logos/email.svg'

function About() {
    return (<div className="about-container">
        <div>
            <div className="about">
                <img className="headshot" src={headshot} alt="headshot"/>
                <span>I have always had an interest for tech and science. 
                    <br/>
                    <br/>
                    Running a photography business and doing a CS degree got me burnt out, and unsure of what I wanted to do.
                    After deciding to take a break from studying I quickly realized that the development way was the right way. 
                    <br/>
                    I missed programming...
                    <br/>
                    <br/>
                    I decided to take web development more seriously, starting with frontend with the goal of going fullstack.
                    I had gotten very interested in cryptocurrency over the prior year, and knew my ultiamte goal was to find a web3 job.
                    <br/>
                    <br/>
                    Part of AlfaDAO and EarnWeb3DAO
                </span>
                <div className="socials-container">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="github"/>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg" alt="linkedin"/>
                <img src={instagram} alt="instagram"/>
                <img src={email} alt="e-mail"/>
            </div>
            </div>
           
        </div>
        <div className="tech-container">
            <img title="Javascript" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="javascript"/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML"/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS"/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React"/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt="SCSS"/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="Typesscript"/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" alt="Firebase"/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="git"/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="vscode"/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" alt="linux"/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" alt="npm"/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg" alt="webpack"/>
        </div>
    </div>)
}

export default About