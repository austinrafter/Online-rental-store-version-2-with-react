import React, {Component} from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default class CustomNavbar extends Component {
  render(){
    return(
      <Navbar bg="primary" variant="light">
     <Navbar.Brand href="/"><strong>EZ-PZ</strong></Navbar.Brand>
     <Nav className="mr-auto">
       <Nav.Link href="/" to="/"><strong>Home</strong></Nav.Link>
       <Nav.Link href="/about"><strong>How It Works</strong></Nav.Link>
       <Nav.Link href="#features"><strong>Start Reservation</strong></Nav.Link>
       <Nav.Link href="/SignUp"><strong>Sign Up</strong></Nav.Link>
       <Nav.Link href="/SignIn"><strong>Sign In</strong></Nav.Link>
     </Nav>
   </Navbar>
    )
  }
}
