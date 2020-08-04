import React from 'react';
import Layout from './layout/Layout';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Layout />
      </div>    
    </BrowserRouter>

  );
}

export default App;
