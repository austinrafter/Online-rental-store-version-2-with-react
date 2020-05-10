import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {Container, Row, Col, Image, Form, Button} from 'react-bootstrap';
import { login } from './registerFunctions'
import axios from 'axios'
import ErrorBoundary from './ErrorBoundary'
import './home.css';
import './signUp.css';

/*Austin Rafter*/
export default class Login extends Component {
  /*Austin Rafter*/
  constructor(props) {
  super(props);
  this.state = {
    email:'',
    password:'',
    errors: {}

  }
    
  /*Austin Rafter*/
  this.onChange = this.onChange.bind(this);
  this.onSubmit = this.onSubmit.bind(this);
  }


  onChange(e){
  this.setState({
    [e.target.name]: e.target.value
  })

  }

 tokenSaver = response => {
    localStorage.setItem('token', response.headers.authorization)
    return response
  }

  /*
  headers: getHeaders() when authenticating this is third argument for puts, and gets
  */
 getHeaders = () => {
    const authToken = localStorage.getItem('token')



    if(!authToken){
      throw new Error("Error there is not authToken")
    }

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': authToken
    }
    return headers
  }
  
 /*Austin Rafter*/
  onSubmit(e) {
    e.preventDefault()

    let data = JSON.stringify({
      email: this.state.email,
      password: this.state.password
    })

    axios.post('http://localhost:3000/user/login',data, {
      headers: {
        'Content-Type':'application/json'
      }
    })
    .then(res => {
      let data = res.data;
      if (res.status === 200) {
         window.sessionStorage.setItem('jwttoken', res.data.token)
        this.props.history.push('/');
      } else {
        const error = new Error(res.error);
        throw error;
      }
    })
    .catch(err => {
      console.error(err);
      alert('Error logging in please try again');
    });
  }



/*Austin Rafter*/
  render(){
  /*Austin Rafter*/
    return(
      <ErrorBoundary>
      <Container>
      <Image src="assets/morecars.jpg"  className="bg" alt= "bg"/>
      <Row>
      </Row>
      <Row className= "log-in-form">


      <Col md={{ span:3, offset:4 }} xs={12} sm={4} className="registration-wrapper">
      <Form  onSubmit={this.onSubmit} classname="login-form">
        <h2>Sign In </h2>


        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email"
          value={this.state.email}
          onChange={this.onChange} required/>
        </Form.Group>

        <Form.Group controlId="formBasicPassword1">
          <Form.Label>Password</Form.Label>
          <Form.Control name="password" type="password"
           placeholder="Password"
           value={this.state.password}
           minLength="8"
           onChange={this.onChange} required/>
        </Form.Group>

        <Button variant="primary" value="Login" type="submit" className="registerbutton">
          Login
        </Button>
      </Form>
      </Col>

      </Row>
      </Container>
      </ErrorBoundary>
    )
  }
}
