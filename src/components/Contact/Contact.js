import React from "react";
import "./Contact.css";


const Contact = () => {
  return (
    <section className="contact">
      <div className="container">
        <h1>Contact Me</h1>
        <form>
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
        </form>
      </div>
    </section>
  );
};

export default Contact;
