import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

import PrevPage from '../../components/PrevPage/PrevPage';
import NextPage from '../../components/NextPage/NextPage';
import Aux from '../../hoc/Aux/aux';
import mdContent from './about.md';

class About extends Component {
  state = {
    mdContent: null
  }

  componentWillMount() {
    // Get the contents from the Markdown file and put them in the React state, so we can reference it in render() below.
    fetch(mdContent).then((response) => response.text()).then((text) => {
      this.setState({ mdContent: text })
    })
  }

  render() {
    return (
      <Aux>
        <div className='pageContainer three-col'>
          <PrevPage link="/" exact>Home</PrevPage> 
          <div>
            <ReactMarkdown source={this.state.mdContent} />
          </div>

          <NextPage link="/contact" exact>About Me</NextPage>  
        </div>
      </Aux>        
    );
  }
};

export default About;