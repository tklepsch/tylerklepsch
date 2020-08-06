import React from 'react';

import classes from './Home.module.css';
import NextPage from '../../components/NextPage/NextPage';
import Aux from '../../hoc/Aux/aux';
import { Link } from 'react-router-dom';

const Home = () => (
  <Aux>
    <div className='pageContainer two-col'>
      <div>
        <h1 className={classes.title}>Hi there, I'm Tyler Klepsch.</h1>
        <p className={classes.text}>I am a full-stack web developer that has worked in the industry for over 5 years. I've built websites from the ground up, from brainstorming the build to deployment. I love delivering quality projects and working with awesome people.</p>
        <br />
        <p className={classes.text}>Want to chat more? <Link to='/contact' className={classes.link}>Send me an email</Link> or <a href="https://www.linkedin.com/in/tyler-klepsch-92004926/" className={classes.link}>find me on LinkedIn.</a></p>
      </div>
      <NextPage link="/contact" exact>About Me</NextPage>  
    </div>
  </Aux>
);

export default Home;