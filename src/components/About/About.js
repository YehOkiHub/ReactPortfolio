import React from "react";
import "./About.css";
// import me from "../../assets/image/me.jpg";
const About = () => {
  return (
    <div className="about">
      <h2>About Me</h2>
      <div>
        <img className="aboutImg" src={""} alt="me" />
      </div>
      <p>
        Lorem ipsum is placeholder text commonly used in the graphic, print, and
        publishing industries for previewing layouts and visual mockups. Lorem
        ipsum is placeholder text commonly used in the graphic, print, and
        publishing industries for previewing layouts and visual mockups. Lorem
        ipsum is placeholder text commonly used in the graphic, print, and
        publishing industries for previewing layouts and visual mockups.
      </p>
    </div>
  );
};

export default About;
