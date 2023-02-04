import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="logo">Logo</div>
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
