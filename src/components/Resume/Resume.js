import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <section className="resume">
      <div className="container">
        <h1>Education and Certificates</h1>
        <div className="resume__content">
          <div className="resume__item">
            <div className="resume__info">
              <div className="item1">
                <h2>Georgia Institute of Technology · Georgia</h2>
                <p>Full-stack Coding Bootcamp: Feb 2023</p>
              </div>

              <div className="item2">
                <h2>Codeacademy · Online Course</h2>
                <p>Javascript completion Certificate: Jan 2023</p>
              </div>

              <div className="item3">
                <h2>Skillcrush · Online Course</h2>

                <p>Javascript completion Certificate: June 2023</p>
              </div>
            </div>
          </div>
          <div className="resume__item">
            <div className="resume__skills">
              <div>
              <h2>Skills</h2>
              </div>

              <div>
              <ul className="skill_list">
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>SQL</li>
                <li>MongoDB</li>
                <li>GitHub</li>
                <li>Express</li>
                <li>React</li>
                <li>Node</li>
                <li>MVC</li>
                <li>Handlebars</li>
                <li>Bulma</li>
                <li>Bootstrap</li>         
              </ul>
              </div>

            </div>            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
