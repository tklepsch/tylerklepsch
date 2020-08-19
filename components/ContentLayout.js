import StateContext from '../components/StateContext'
import { Component } from 'react'
import Layout from './layout'
import { motion } from 'framer-motion'

const name = 'Tyler Klepsch'
export const siteTitle = 'Tyler Klepsch | Web Developer'

let layoutMotionVariants = {
  pageInitial: {
    opacity: 0,
    x: ''
  },
  pageAnimate: {
    opacity: 1,
    x: 0
  },
  pageExit: {
    opacity: 0,
    x: ''
  }
}

export default class ContentLayout extends Component {
  componentDidUpdate() {
    // Handles Motion animations when a button is clicked using context to manage our button state.
    if(this.context.backButtonClicked) {
      layoutMotionVariants.pageInitial.x = '-100%';
      layoutMotionVariants.pageExit.x = '100%';
    }

    if(this.context.nextButtonClicked) {
      layoutMotionVariants.pageInitial.x = '100%';
      layoutMotionVariants.pageExit.x = '-100%';
    }

    if(this.context.navigationButtonClicked) {
      layoutMotionVariants.pageInitial.x = '0';
      layoutMotionVariants.pageExit.x = '0';
    }
  }

  render() {
    return (
      <Layout>
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

ContentLayout.contextType = StateContext;