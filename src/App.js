import React from 'react';
import Layout from './layout/Layout';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Blog from './pages/Blog/Blog';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Layout>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about-me" exact component={About} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/blog" exact component={Blog} />
          </Switch>
        </Layout>
      </div>    
    </BrowserRouter>

  );
}

export default App;
