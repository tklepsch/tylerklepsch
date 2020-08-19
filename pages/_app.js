import App from "next/app"
import '../styles/globals.css'
import { AnimatePresence } from "framer-motion"
import StateContext from '../components/StateContext'

export default class MyApp extends App {
  state = {
    backButtonClicked: false,
    nextButtonClicked: false,
    navigationButtonClicked: false,
    colorSwitch: 'light'
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

  colorSwitchHandler = () => {
    if(this.state.colorSwitch === 'dark') {
    this.setState({colorSwitch: 'light'})
    } else {
      this.setState({colorSwitch: 'dark'})
    }

  }

  render() {
    // Provided a lot of help with getting the exit animate to work correctly: https://github.com/framer/motion/issues/474#issuecomment-595444564
    const { Component, pageProps, router } = this.props;
    return (
      // Using Context to Help us manage state for page clicks;
      <StateContext.Provider value={{ 
          backButtonClicked: this.state.backButtonClicked, nextButtonClicked: this.state.nextButtonClicked,
          navigationButtonClicked: this.state.navigationButtonClicked,
          colorSwitch: this.state.colorSwitch,
          backButtonClickedHandler: this.backButtonClickedHandler,
          nextButtonClickedHandler: this.nextButtonClickedHandler,
          navigationClickedHandler: this.navigationClickedHandler,
          colorSwitchHandler: this.colorSwitchHandler}}>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.asPath}/>        
        </AnimatePresence>        
      </StateContext.Provider>

    )
  }
}
