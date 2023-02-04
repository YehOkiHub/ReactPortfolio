import React from 'react'
import {AiFillGithub, AiFillFacebook, AiFillLinkedin} from "react-icons/ai"
import "./Footer.css"

const Footer = () => {
  return (
    <footer>
        <div className='socialLink'><AiFillGithub className='socialItemLink'/></div>
        <div className='socialLink'><AiFillFacebook className='socialItemLink'/></div>
        <div className='socialLink'><AiFillLinkedin className='socialItemLink'/></div>
    </footer>
  )
}

export default Footer