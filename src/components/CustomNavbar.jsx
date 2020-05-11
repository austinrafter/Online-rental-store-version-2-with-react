//Author:Austin Rafter
import React, {Component} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './CustomNavbar.css';

/*Austin Rafter*/
export default class CustomNavbar extends Component {

  render(){
    return(
      /*Austin Rafter*/
      <Navbar bg="primary" variant="light">
     <Navbar.Brand><Link to="/" className="brand-logo"><strong>EZ-PZ</strong></Link></Navbar.Brand>
       
     <Nav className="mr-auto">
       <Nav.Link><Link to ="/" to="/"><strong>Home</strong></Link></Nav.Link>
       <Nav.Link><Link to="/about"><strong>How It Works</strong></Link></Nav.Link>
       <Nav.Link><Link to="/Cars"><strong>Start Reservation</strong></Link></Nav.Link>
       <Nav.Link><Link to="/SignUp"><strong>Sign Up</strong></Link></Nav.Link>
       <Nav.Link><Link to="/Login"><strong>Sign In</strong></Link></Nav.Link>
     </Nav>
   </Navbar>
    )
  }
}
