import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {Container, Row, Col, Image, Form, Button} from 'react-bootstrap';
import { login } from './registerFunctions'
import ErrorBoundary from './ErrorBoundary'
import './home.css';
import './signUp.css';

export default class Login extends Component {
  constructor(props) {
  super(props);
  this.state = {
    email:'',
    password:'',
    errors: {}

  }

  this.onChange = this.onChange.bind(this);
  this.onSubmit = this.onSubmit.bind(this);
  }


  onChange(e){
  this.setState({
    [e.target.name]: e.target.value
  })

  }


  onSubmit(e) {
    e.preventDefault()

    const user = {
      email: this.state.email,
      password: this.state.password
    }

    login(user).then(res => {
      if (!res.error) {
        this.props.history.push(`/`)

      }
    })
  }



  render(){

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
