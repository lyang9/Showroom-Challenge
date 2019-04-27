import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';

function App() {
  return (
    <React.Fragment>
      <Navbar />
    </React.Fragment>
  );
}

export default App;
