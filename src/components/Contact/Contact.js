import React from "react";
import "./Contact.css";
import email from "../imgs/email.png";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section className="contact">
      <div className="container">
        <h1>Contact Me!</h1>

        <div className="contact-card">
          
          
         
        </div>

        <div className="contact-info">
          {/* <h2>Contact Info</h2> */}

          <p>Name: Chien Ting Yeh</p>
          <p>Email: Jeff077872@hotmail.com</p>

          <p>Location: Queens, NY</p>

          <p>Tel: (631) 565-2416</p>
        </div>

        {/* <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form> */}
      </div>
    </section>
  );
};

export default Contact;
