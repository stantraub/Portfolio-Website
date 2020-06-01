import React from 'react';
import '../sass/main.scss'
import { Link } from "react-router-dom";


const Home = () => (
  <section className="heading flex-col whole-page-height">
    <div className="heading__title">
      Hey there, I'm <span className="heading__title-name">Stanley Traub</span>.
    </div>
    <p className="heading__subheading">
      I'm a full-stack web developer with killer ballroom dancing skills.
    </p>
    <Link to='portfolio'>
      <button className="btn">Check out my work &rarr;</button>
    </Link>
  </section>
);

export default Home;