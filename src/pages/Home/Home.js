import React from 'react';

import classes from './Home.module.css';
import NextPage from '../../components/NextPage/NextPage';
import Aux from '../../hoc/Aux/aux';

const Home = () => (
  <Aux>
    <div className={`${classes.pageContainer} ${classes.pageSingleButton}`}>
      <div>
        <h1 className={classes.title}>Hi there, I'm Tyler Klepsch</h1>
        <p className={classes.text}>I am a full-stack web developer with aspirations of self-improvment. For the last few years, I’ve specilized in <span className={classes.highlight}>Drupal development.</span></p>
        <p className={classes.text}>Starting with this website, I’m looking to expand off that. I love working with awesome people on fun projects. Want to chat more? Send me an email or <a href="https://www.linkedin.com/in/tyler-klepsch-92004926/" className={classes.link}>find me on LinkedIn.</a></p>
      </div>
      <NextPage link="/" exact>About Me</NextPage>  
    </div>
  </Aux>


)


export default Home;