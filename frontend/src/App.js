import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
// import axios from 'axios';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Users from './components/Users';
import UserWatching from './components/UserWatching';
import UserPost from './components/UserPost';
import Shows from './components/Shows';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route path='/users' component={Users}></Route>
          <Route path='/user/:id' component={UserWatching}></Route>
          <Route path='/user/post' component={UserPost}></Route>
          <Route path='/shows' component={Shows}></Route>
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
