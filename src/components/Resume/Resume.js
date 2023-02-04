import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <section className="resume">
      <div className="container">
        <h1>Resume</h1>
        <div className="resume__content">
          <div className="resume__item">
            <h3>Education</h3>
            <div className="resume__info">
              <h4>University of California, Los Angeles</h4>
              <p>
                <b>Master of Science</b>
              </p>
              <p>Computer Science</p>
              <p>2018 - 2020</p>
            </div>
            <div className="resume__info">
              <h4>University of California, Los Angeles</h4>
              <p>
                <b>Bachelor of Science</b>
              </p>
              <p>Computer Science</p>
              <p>2014 - 2018</p>
            </div>
          </div>
          <div className="resume__item">
            <h3>Experience</h3>
            <div className="resume__info">
              <h4>Software Engineer</h4>
              <p>
                <b>Google</b>
              </p>
              <p>2018 - 2020</p>
            </div>
            <div className="resume__info">
              <h4>Software Engineer</h4>
              <p>
                <b>Facebook</b>
              </p>
              <p>2018 - 2020</p>
            </div>
            <div className="resume__info">
              <h4>Software Engineer</h4>
              <p>
                <b>Amazon</b>
              </p>
              <p>2018 - 2020</p>
            </div>
          </div>
          <div className="resume__item">
            <h3>Skills</h3>
            <div className="resume__info">
              <h4>Programming Languages</h4>
              <p>
                <b>Python</b>
              </p>
              <p>
                <b>Java</b>
              </p>
              <p>
                <b>C++</b>
              </p>
              <p>
                <b>JavaScript</b>
              </p>
            </div>
            <div className="resume__info">
              <h4>Web Development</h4>
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
            </div>
            <div className="resume__info">
              <h4>Database</h4>
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
