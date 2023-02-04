import React from "react";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <section className="portfolio">
      <div className="container">
        <h1>Portfolio</h1>
        <div className="portfolio__content">
          <div className="portfolio__item">
            <img src="https://picsum.photos/340/340" alt="portfolio" />
            <h3>Project 1</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quae.
            </p>
          </div>
          <div className="portfolio__item">
            <img src="https://picsum.photos/340/340" alt="portfolio" />
            <h3>Project 2</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quae.
            </p>
          </div>
          <div className="portfolio__item">
            <img src="https://picsum.photos/340/340" alt="portfolio" />
            <h3>Project 3</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quae.
            </p>
          </div>
          <div className="portfolio__item">
            <img src="https://picsum.photos/340/340" alt="portfolio" />
            <h3>Project 4</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quae.
            </p>
          </div>
          <div className="portfolio__item">
            <img src="https://picsum.photos/340/340" alt="portfolio" />
            <h3>Project 5</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quae.
            </p>
          </div>
          <div className="portfolio__item">
            <img src="https://picsum.photos/340/340" alt="portfolio" />
            <h3>Project 6</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quae.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
