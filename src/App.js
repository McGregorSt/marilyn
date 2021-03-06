import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import classes from './App.css'
import Navbar from './components/Navbar/Navbar';
import Gallery from './components/Gallery/Gallery';
import Article from './components/Article/Article'

class App extends Component {
  render () {

    let route = (
      <Switch>
        <Route path='/marilyn/' exact component={Article} />
        <Route path='/marilyn/gallery' component={Gallery} />
      </Switch>
    )


    return (
      <div className={classes.App}>
        <Navbar />
        { route }
      </div>
    );

  }
}

export default App;
