import React from 'react'
import stan from '../images/stan.png'

const About = () => (
  <section className="about whole-page-height flex-col">
    <figure className="about__shape">
      <img className="about__img" src={stan} alt="Stan" />
    </figure>

    <div className="about__heading">ABOUT ME</div>

    <div className="skills">
      <div className="skills__story">
        <h2 className="skills__list__heading">MY STORY</h2>
        <p className="skills__paragraph">
          I'm a full-stack developer with a main focus on frontend. I love to
          build beautiful websites with intuitive UI/UX designs that I'm sure
        </p>
      </div>
      <div className="skills__list">
        <h2 className="skills__list__heading">TECHNOLOGIES</h2>
        <div className="skills__list__container">
          <div className="skills__list__item flex-row">
            <div className="skills__list__item-name">React</div>
            <div className="bar">
              <div
                style={{ width: "90%" }}
                className="bar__fill"
              ></div>
              <span className="skills__list__item-percentage">90%</span>
            </div>
          </div>

          {/* 
            <div className="skills__list__item">React</div>
          <div className="skills__list__item">Redux</div>
          <div className="skills__list__item">CSS</div>
          <div className="skills__list__item">SCSS</div>
          <div className="skills__list__item">HTML</div>
          <div className="skills__list__item">JavaScript</div>
          <div className="skills__list__item">AWS</div>
          <div className="skills__list__item">NextJS</div>
          <div className="skills__list__item">Express.js</div>
          <div className="skills__list__item">MySQL</div>
          <div className="skills__list__item">MongoDB</div>
          <div className="skills__list__item">GraphQL</div>
          <div className="skills__list__item">Apollo</div>
          <div className="skills__list__item">Docker</div>
          <div className="skills__list__item">Git</div>
          <div className="skills__list__item">AWS</div>
            */}
        </div>
      </div>
    </div>
  </section>
);

export default About