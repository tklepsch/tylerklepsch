import App from "next/app";
import '../styles/globals.css';
import { AnimatePresence } from "framer-motion";
import StateContext from '../components/StateContext';

export default class MyApp extends App {
  state = {
    backButtonClicked: false,
    nextButtonClicked: false,
    navigationButtonClicked: false
  }

  backButtonClickedHandler = () => {
    this.setState({
      backButtonClicked: true,
      nextButtonClicked: false,
      navigationButtonClicked: false   
    })
  }

  nextButtonClickedHandler = () => {
    this.setState({
      backButtonClicked: false,
      nextButtonClicked: true,
      navigationButtonClicked: false 
    })
  }

  navigationClickedHandler = () => {
    this.setState({
      backButtonClicked: false,
      nextButtonClicked: false,
      navigationButtonClicked: true
    })
  }

  render() {
    // Provided a lot of help with getting the exit animate to work correctly: https://github.com/framer/motion/issues/474#issuecomment-595444564
    const { Component, pageProps, router } = this.props;
    return (
      // Using Context to Help us manage state for page clicks;
      <StateContext.Provider value={{ 
          backButtonClicked: this.state.backButtonClicked, nextButtonClicked: this.state.nextButtonClicked,
          navigationButtonClicked: this.state.navigationButtonClicked,
          backButtonClickedHandler: this.backButtonClickedHandler,
          nextButtonClickedHandler: this.nextButtonClickedHandler,
          navigationClickedHandler: this.navigationClickedHandler}}>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.asPath}/>        
        </AnimatePresence>        
      </StateContext.Provider>

    )
  }
}
