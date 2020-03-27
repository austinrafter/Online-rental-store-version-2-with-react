// src/App.js

import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/home';
import About from './components/howitworks';
import Navbar from './components/CustomNavbar'
import SignIn from './components/signIn'
import SignUp from './components/signUp'
import Checkout from './components/checkout'

class App extends Component {
  render () {
    return (
      <Router>
      <div>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/SignIn" component={SignIn} />
      <Route exact path="/SignUp" component={SignUp} />
      <Route exact path="/checkout" component={Checkout} />

      </div>
      </Router>
    );
  }
}

export default App;
