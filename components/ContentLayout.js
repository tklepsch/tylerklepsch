import { Component } from 'react'
import Layout from './layout';
import { motion } from 'framer-motion';

const name = 'Tyler Klepsch'
export const siteTitle = 'Tyler Klepsch | Web Developer'

export default class contentLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backButtonClicked: false,
      forwardButtonClicked: false
    };
  }

  render() {
    let layoutMotionVariants = {
      pageInitial: {
        opacity: 0,
        x: '-100%'
      },
      pageAnimate: {
        opacity: 1,
        x: 0
      },
      pageExit: {
        opacity: 0,
        x: '-100%'
      }
    }
  
    if(this.props.columnType === 'one-col mid-width') {
      layoutMotionVariants.pageInitial.x = '0';
      layoutMotionVariants.pageExit.x = '0';
    }
  
    if(this.props.backButtonClicked) {
      layoutMotionVariants.pageInitial.x = '100%';
      layoutMotionVariants.pageExit.x = '100%';
    }

    if(this.props.nextButtonClicked) {
      layoutMotionVariants.pageInitial.x = '-100%';
      layoutMotionVariants.pageExit.x = '-100%';
    }
    
    return (
      <Layout backgroundPaddingtype={this.props.backgroundPaddingtype}>
        <motion.section 
          transition={{ duration: 1 }}
          initial="pageInitial" 
          animate="pageAnimate" 
          exit="pageExit"
          variants={layoutMotionVariants}
          className={`pageContainer ${this.props.columnType}`}>
          {this.props.children}            
        </motion.section>            
      </Layout>         
    )        
  }
}