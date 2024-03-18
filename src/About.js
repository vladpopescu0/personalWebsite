import { React } from "react";
import "./CardContainer.css";
import "./About.css";
import emailIcon from "./images/emailIcon.png";
import githubIcon from "./images/githubIcon.png";
import linkedinIcon from "./images/linkedinIcon.png";
import mePhoto from "./images/me.jpg";
import jsIcon from "./images/jsIcon.png";
import pythonIcon from "./images/pythonIcon.png";
import javaIcon from "./images/javaIcon.png";
import cppIcon from "./images/cPlusPlusIcon.png";
import assemblyIcon from "./images/assemblyIcon.jpg";

function About() {
  return (
    <div className="about-page">
      <div className="bio">
        <img src={mePhoto} alt="personal" className="me-photo" />
        <div>
          <h2>About Me</h2>
          <p>
            Hi there! My name is Vlad Popescu and I'm a student at Delft
            University of Technology. I love coding and building things that
            make a difference. Feel free to reach out to me if you have any
            questions or just want to connect!
          </p>
        </div>
      </div>
      <div className="skills contact-info">
        <h2>Skills</h2>
        <ul>
          <li className="info-row">
            <img src={jsIcon} alt="JavaScript" className="link-icon" />
            JavaScript
          </li>
          <li className="info-row">
            <img src={pythonIcon} alt="Python" className="link-icon" />
            Python
          </li>
          <li className="info-row">
            <img src={javaIcon} alt="Java" className="link-icon" />
            Java
          </li>
          <li className="info-row">
            <img src={cppIcon} alt="C" className="link-icon" />
            C/C++
          </li>
          <li className="info-row">
            <img src={assemblyIcon} alt="Assembly" className="link-icon" />
            Assembly
          </li>
        </ul>
      </div>
      <div className="contact-info">
        <h2>Contact Information</h2>
        <ul>
          <li className="info-row">
            <img src={emailIcon} alt="Email" className="link-icon" />
            Email: vl_popescu@protonmail.com
          </li>
          <li className="info-row">
            <img src={githubIcon} alt="Github" className="link-icon" />
            <a
              href="https://github.com/vladpopescu0"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub: github.com/vladpopescu0
            </a>
          </li>
          <li className="info-row">
            <img src={linkedinIcon} alt="LinkedIn" className="link-icon" />
            <a
              href="https://www.linkedin.com/in/vlad-stefan-popescu-8a521b1a1/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn: linkedin.com/in/vlad-stefan-popescu-8a521b1a1/
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
