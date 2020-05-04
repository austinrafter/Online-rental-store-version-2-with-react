// src/App.js

import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import jwt_decode from 'jwt-decode'
import Home from './components/home';
import About from './components/howitworks';
import Navbar from './components/CustomNavbar';
import Login from './components/Login';
import SignUp from './components/signUp';
import SearchCar from './components/startRes';
import Checkout from './components/checkout';
import SetDropOff from './components/setDropOff';
import SetPickUp from './components/setPickUp';
import Profile from './components/Profile';
import Products from './components/products'
import withAuth from './components/withAuth';
import Contacts from './components/contacts';



class App extends Component {
  constructor(){
    super();
  }




  render () {
    return (

      <header>
      <Router>
      <div className="App">
      <Navbar />
      <Route exact path="/" component={Home}   />
      <Route exact path="/about" component={About} />
      <Route exact path="/startres" component={SearchCar} />
      <Route exact path="/Login" component={Login} />
      <Route exact path="/SignUp" component={SignUp} />
      <Route exact path="/checkout" component={Checkout} />
      <Route exact path="/SetPickUp" component={SetPickUp} />
      <Route exact path="/SetDropOff" component={SetDropOff} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/products" component={Products} />


      </div>
      </Router>
      </header>
    );
  }
}

export default App;
