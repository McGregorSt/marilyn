import React from 'react';

import classes from './App.css'
import Navbar from './components/Navbar/Navbar';
import Gallery from './components/Gallery/Gallery';


function App() {
  return (
    <div className={classes.App}>
      <Navbar />
      Main
      <Gallery />
    </div>
  );
}

export default App;
