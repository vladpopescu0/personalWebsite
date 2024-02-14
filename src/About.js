import React from "react";
import "./CardContainer.css";
import "./About.css";
import emailIcon from "./images/emailIcon.png";
import githubIcon from "./images/githubIcon.png";
import linkedinIcon from "./images/linkedinIcon.png";
import mePhoto from "./images/me.jpg";

function About() {
  return (
    <div
      className="body-container"
      style={{ background: "#BEE3DB", marginTop: 30, color: "#555B6E" }}
    >
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
