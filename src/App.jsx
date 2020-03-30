// src/App.js

import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/home';
import About from './components/howitworks';
import Navbar from './components/CustomNavbar'
import SignIn from './components/signIn'
import SignUp from './components/signUp'
import SearchCar from './components/startRes'
import Checkout from './components/checkout'
import List from './components/list'

class App extends Component {
  render () {
    return (
      <Router>
      <div>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/startres" component={SearchCar} />
      <Route exact path="/SignIn" component={SignIn} />
      <Route exact path="/SignUp" component={SignUp} />
      <Route exact path="/checkout" component={Checkout} />
      <Route exact path="/list" component={List} />
      </div>
      </Router>
    );
  }
}

export default App;
