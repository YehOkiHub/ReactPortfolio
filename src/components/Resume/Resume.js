import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <section className="resume">
      <div className="container">
        <h1>Resume</h1>
        <div className="resume__content">
          <div className="resume__item">
            <h2>Education</h2>
            <div className="resume__info">
              <h3>Georgia Institute of Technology · Georgia</h3>
              <p>
                <b>Full-stack Development Bootcamp</b>
              </p>
              <p>Graduation year:</p>
              <p>Feb 2023</p>
            </div>           
          </div>
          <div className="resume__item">
          <div className="resume__info">
              <h2>Web Development Skills</h2>
              <p>
                <b>Javascript</b>
              </p>
              <p>
                <b>React</b>
              </p>
              <p>
                <b>Node.js</b>
              </p>
              <p>
                <b>Express</b>
              </p>
              <p>
                <b>HTML</b>
              </p>
              <p>
                <b>CSS</b>
              </p>
              <p>
                <b>Heroku</b>
              </p>
              <p>
                <b>Bootstrap</b>
              </p>
            </div>
            <div className="resume__info">
              <h2>Database</h2>
              <p>
                <b>MySQL</b>
              </p>
              <p>
                <b>MongoDB</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
