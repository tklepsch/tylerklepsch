import App from "next/app"
import '../styles/globals.css'
import { AnimatePresence } from "framer-motion"
import StateContext from '../components/StateContext'
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
  gtmId: 'GTM-NX7CGQ6'
}

// https://stackoverflow.com/questions/60729564/next-js-react-gtm-module-referenceerror-document-is-not-defined
// "Wrap the piece of TagManager initializer with a checker
if (process.browser) {
  TagManager.initialize(tagManagerArgs);
}

export default class MyApp extends App {
  state = {
    backButtonClicked: false,
    nextButtonClicked: false,
    navigationButtonClicked: false,
    colorSwitch: 'white'
  }

  componentDidMount() {
    // If ColorSwitch was previously selected, use selected color.
    const storage = localStorage.getItem("colorSwitch");
    if(storage) {
      this.setState({colorSwitch: storage})
    }
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
      localStorage.setItem("colorSwitch", "light");
    } else {
      this.setState({colorSwitch: 'dark'})
      localStorage.setItem("colorSwitch", "dark");
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
