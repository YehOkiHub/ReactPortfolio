import React from 'react'
import {AiFillGithub, AiFillFacebook, AiFillLinkedin} from "react-icons/ai"
import "./Footer.css"
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
        <Link className="navLink" to={"https://github.com/YehOkiHub"}>
        <div className='socialLink'><AiFillGithub className='socialItemLink'/></div>
        </Link>

        <Link className="fbLink" to={"https://facebook.com/jeffzyeh"}>
        <div className='socialLink'><AiFillFacebook className='socialItemLink'/></div>
        </Link>

        <Link className="liLink" to={"https://www.linkedin.com/in/jeffyehny/"}>
        <div className='socialLink'><AiFillLinkedin className='socialItemLink'/></div>
        </Link>
    </footer>
  )
}

export default Footer