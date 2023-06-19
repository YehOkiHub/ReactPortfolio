import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <section className="resume">
      <div className="container">
        <h1>Resume</h1>
        <div className="resume__content">
          <div className="resume__item">
            <div className="resume__info">
              <div className="item1">
                <h2>Teletech IT Support Specialist 2012-2019</h2>
                  <h3>Served customers from China and Taiwan in a High Paced environment for a large computer peripheral company. 
                   Troubleshooted Gaming software and hardware components as well as used Salesforce CRM to manage relationships with customers on a case to case basis </h3>

                  {/* <ul>
                    <li> Interacted with an Average of 70 Customers a day</li>
                    <li>Collaborated with Teams in China and Taiwan to provide a
                  smoother customer experience.</li>
                    <li>Boosted the average of the
                  Team’s customer satisfaction surveys by at least 15%</li>
                  <li>Mentored
                  new hires in familiarizing themselves with salesforce as well
                  as the company’s gaming software</li>

                  </ul> */}
                  
                
              </div>

              <div className="item2">
                <h2>Georgia Institute of Technology · Georgia</h2>
                <p>Full-stack Coding Bootcamp: Feb 2023</p>
              </div>

              <div className="item3">
                <h2>Codeacademy · Online Course</h2>
                <p>Javascript completion Certificate: Jan 2023</p>
              </div>
              <div className="item4"></div>
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
