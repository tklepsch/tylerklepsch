import React from 'react';

import classes from './Home.module.css';

const Home = () => (
  <div>
    <h1 className={classes.title}>Hi there, I'm Tyler Klepsch</h1>
    <p className={classes.text}>I am a full-stack web developer with aspirations of self-improvment. For the last few years, I’ve specilized in Drupal development.</p>
    <p className={classes.text}>Starting with this website, I’m looking to expand off that. I love working with awesome people on fun projects. Want to chat more? Send me an email or <a href="https://www.linkedin.com/in/tyler-klepsch-92004926/">find me on LinkedIn.</a></p>
  </div>
)


export default Home;