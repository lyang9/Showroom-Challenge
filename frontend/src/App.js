import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
// import axios from 'axios';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Users from './components/Users';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route path='/users' component={Users}></Route>
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
