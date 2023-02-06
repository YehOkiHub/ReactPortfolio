import React from "react";
import "./About.css";
const logo = require('../../components/imgs/me.jpg');
// import me from "../../assets/image/me.jpg";
const About = () => {
  return (
    <div className="about">
      
      <div>
      <h2 className="abouttitle">About Me</h2>
        <img className="aboutImg" src={logo} alt="me" />
      </div>
      
      <p>
      As a full-stack developer, I have developed and deployed several web applications using HTML, CSS, JavaScript, Node.js, MongoDB, and React.

My experience has allowed me to create dynamic and interactive user interfaces for my web applications.

I have worked with Node.js to build server-side applications and have used MongoDB as a database to store and retrieve data.

With my knowledge of React, I have built efficient and scalable single-page applications that provide a seamless user experience.

I have also worked on integrating various third-party APIs into my applications, using technologies like Node.js and React, to provide additional functionality to the users.
        
      </p>
    </div>
  );
};

export default About;
