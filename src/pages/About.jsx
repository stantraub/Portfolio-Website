import React from 'react'
import stan from '../images/stan.png'
import Skill from "../components/skill"

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
          <Skill skill="SCSS/CSS3" percentage={90} timing={1.6} />
          <Skill skill="React" percentage={90} timing={1.7} />
          <Skill skill="HTML" percentage={90} timing={1.8} />
          <Skill skill="Redux" percentage={80} timing={1.9}/>
          <Skill skill="JavaScript" percentage={80} timing={2}/>
          <Skill skill="GraphQL" percentage={50} timing={2.1}/>
          <Skill skill="MongoDB" percentage={65} timing={2.2}/>
          <Skill skill="Node.js" percentage={65} timing={2.3}/>
          <Skill skill="Express" percentage={60} timing={2.4}/>
          <Skill skill="Apollo" percentage={50} timing={2.5}/>
        </div>
      </div>
    </div>
  </section>
);

export default About