import React from 'react';
import '../sass/main.scss'

const Home = () => (
  <section className="about flex-col">
    <div className="about__title">
      Hey there, I'm <span className="about__title-name">Stanley Traub</span>.
    </div>
    <p className="about__subheading">
      I'm a full-stack web developer with killer ballroom dancing skills.
    </p>
    <button className="btn">
        Check out my work &rarr;
    </button>
  </section>
);

export default Home;