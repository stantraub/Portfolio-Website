import React from 'react'
import project1 from '../images/coworkinger-pic-2.png'

const Portfolio = () => (
  <section className="portfolio flex-col">
    <div className="portfolio__heading">PROJECTS</div>
    <div className="projects">
      <div className="projects-show">
          <img className="projects__img-photo" src={project1} alt="Project 1" />
      </div>
    </div>
  </section>
);


export default Portfolio