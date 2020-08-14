import App from "next/app";
import '../styles/globals.css';
import { AnimatePresence } from "framer-motion";

export default class MyApp extends App {
  render() {

    // Provided a lot of help with getting the exit animate to work correctly: https://github.com/framer/motion/issues/474#issuecomment-595444564
    const { Component, pageProps, router } = this.props;
    return (
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.asPath}  />        
      </AnimatePresence>
    )
  }
}
