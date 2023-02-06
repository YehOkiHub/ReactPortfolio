import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Logo = require('../imgs/Logo.png');


const Header = () => {
  return (
    <header>
      <div className="header-container">
      <img className="logopic" src={Logo} alt="Logo"/>
        <div className="logo"> 
        Made with React
        </div>
        <nav className="nav">
          <ul>
            <li>
              <Link className="navLink" to={"/"}>
                About
              </Link>
            </li>
            <li>
              <Link className="navLink" to={"/portfolio"}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link className="navLink" to={"/contact"}>
                Contact
              </Link>
            </li>
            <li>
              <Link className="navLink" to={"/resume"}>
                Resume
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
