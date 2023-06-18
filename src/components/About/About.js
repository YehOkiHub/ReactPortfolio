import React from "react";
import "./About.css";
const logo = require("../../components/imgs/me.jpg");
// import me from "../../assets/image/me.jpg";
const About = () => {
  return (
    <div className="about">
      <div>
        <h2 className="abouttitle">About me</h2>
        <img className="aboutImg" src={logo} alt="me" />
      </div>

      <p className="description">
        Hi, I'm Chien, my friends call me Jeff. I'm an aspiring Web Developer with a interest in all things computers. I have a BA in Business Administration and spent most of my career working in IT.
         Recently, I decided to make a leap into tech. I gained valuable experience during my Georgia Tech bootcamp honing my skills in HTML, CSS, Javascript, MySQL, MongoDB, and other various frameworks. 
         I look forward to bringing my skills to a company where I can build applications and assist everyday people.
         
        
      </p>
    </div>
  );
};

export default About;
