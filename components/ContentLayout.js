import Layout from './layout';
import { motion } from 'framer-motion';

const name = 'Tyler Klepsch'
export const siteTitle = 'Tyler Klepsch | Web Developer'

export default function contentLayout({ children, columnType, backgroundPaddingtype}){
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

  if(columnType === 'one-col mid-width') {
    layoutMotionVariants.pageInitial.x = '0';
    layoutMotionVariants.pageExit.x = '0';
  }

  if(columnType === 'two-col') {
    layoutMotionVariants.pageInitial.x = '100%';
    layoutMotionVariants.pageExit.x = '100%';
  }

  return (
    <Layout backgroundPaddingtype={backgroundPaddingtype}>
      <motion.section 
        transition={{ duration: 1 }}
        initial="pageInitial" 
        animate="pageAnimate" 
        exit="pageExit"
        variants={layoutMotionVariants}
        className={`pageContainer ${columnType}`}>
        {children}            
      </motion.section>            
    </Layout>            
  )    
}