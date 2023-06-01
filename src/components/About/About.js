import React from "react";
import "./About.css";
const logo = require("../../components/imgs/me.jpg");
// import me from "../../assets/image/me.jpg";
const About = () => {
  return (
    <div className="about">
      <div>
        <h2 className="abouttitle">Hello there!</h2>
        <img className="aboutImg" src={logo} alt="me" />
      </div>

      <p>
        I'm Jeff, This is my personal portfolio.
      </p>
    </div>
  );
};

export default About;
