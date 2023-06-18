import React from "react";
import "./Portfolio.css";
import { Link } from "react-router-dom";
const modernMan = require('../../components/imgs/ModernMan.png');
const pokeClash = require('../../components/imgs/PokeClash.png');
const techBlog = require('../../components/imgs/Techblog.png');
const weatherDashboard = require('../../components/imgs/WeatherDashboard.png');
const workdayScheduler = require('../../components/imgs/WorkdayScheduler.png');
const romanQuiz = require('../../components/imgs/RomanQuiz.png');

const Portfolio = () => {
  return (
    <section className="portfolio">
      <div className="container">
        <h1>Portfolio</h1>
        <div className="portfolio__content">
          <div className="portfolio__item">
            <img src={modernMan} alt="portfolio" />            
            <Link className="navLink" to={"https://github.com/YehOkiHub/EcommerceStore"}>
            <h2>The Modern Man</h2>
              </Link>
            <h3>Technolgies Used: SQL, Javascript, Handlebars, CSS, Node.js</h3>
            <p>
              Simple Ecommerce watch Store with Login sessions and add to cart. Products are seeded through SQL.
            </p>
          </div>
          <div className="portfolio__item">
            <img src={pokeClash} alt="portfolio" />
            <Link className="navLink" to={"https://github.com/YehOkiHub/Pokemon-Clash"}>
            <h2>Pokemon Clash!</h2>
              </Link>
            
            <h3>Technolgies Used: Javascript, HTML, Bulma, Pokemon API</h3>
            <p>
            Online Minigame where the user selects Pokemon to fight.
            </p>
          </div>
          <div className="portfolio__item">
            <img src={techBlog} alt="portfolio" />
            <Link className="navLink" to={"https://github.com/YehOkiHub/TechBlog"}>
            <h2>Tech Blog</h2>
              </Link>            
            <h3>Technologies Used: Javascript, Handlebars, HTML, Node.js, CSS, SQL</h3>
            <p>
            Online blog. Able to Create, Retrieve, Update, Delete blog posts.
            </p>
          </div>
          <div className="portfolio__item">
            <img src={weatherDashboard} alt="portfolio" />
            <Link className="navLink" to={"https://github.com/YehOkiHub/WeatherDashboard"}>
            <h2>Weather Dashboard</h2>
              </Link>   
            
            <h3>Technologies Used: Javascript, HTML, CSS, Weather API</h3>
            <p>
            A weather app that shows the weather details of cities the user searches for.
            </p>
          </div>
          <div className="portfolio__item">
            <img src={workdayScheduler} alt="portfolio" />
            <Link className="navLink" to={"https://github.com/YehOkiHub/WorkDayScheduler"}>
            <h2>Work Day Scheduler</h2>
              </Link>   
            
            <h3>Technologies Used: Javascript, Handlebars, HTML, Node.js, CSS, SQL</h3> 
            <p>
            Online Agenda scheduler for users to make their own schedule.
            </p>
          </div>
          <div className="portfolio__item">
            <img src={romanQuiz} alt="portfolio" />
            <Link className="navLink" to={"https://github.com/YehOkiHub/CodeQuiz"}>
            <h2>Roman History Quiz </h2>
              </Link>   
            
            <h3>Technologies Used: HTML,CSS, Javascript</h3>
            <p>
              Multiple choice quiz based on Roman History.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
