import React, {Component} from 'react';
import { Container, Row, Col, Image, Form, Button} from 'react-bootstrap';
import axios from 'axios'
import './home.css';
import './signUp.css';

/*Austin Rafter*/
export default class SignUp extends Component {
  /*Austin Rafter*/
  constructor(props) {
  super(props);
  this.state = {
    email:'',
    password:'',
    first_name:'',
    last_name:'',
    license_number:'',
    age:'',
    errors: {}


  }

    /*Austin Rafter*/
  this.onChange = this.onChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  }





  /*Austin Rafter*/
  onChange(e){

  this.setState({
    [e.target.name]: e.target.value
  })

  }

/*Austin Rafter*/
handleSubmit(event) {
  event.preventDefault()

      let newUser = JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        license_number: this.state.license_number,
        age: parseInt(this.state.age)
      })
      
    /*Austin Rafter*/
      axios.post('http://localhost:3000/user/signup', newUser, {
        headers: {
          'Content-Type':'application/json'
        }
      })
      .then(res => {
        this.props.history.push(`/Login`)
      })
}

  /*Austin Rafter*/
  render(){

    return(
      <Container>
      <Image src="assets/morecars.jpg"  className="bg" alt= "bg"/>
      <Row>
      </Row>
      <Row className= "sign-up-form">


      <Col md={{ span:3, offset:4 }} xs={12} sm={4} className="registration-wrapper">
      <Form onSubmit={this.handleSubmit} className= "signup-form">
        <h2>Sign Up </h2>

        <Form.Group controlId="formBasicEmail">
          <Form.Label >Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email"
          value={this.state.email} onChange={this.onChange} required/>
        </Form.Group>

        <Form.Group controlId="formBasicPassword1">
          <Form.Label >Password</Form.Label>
          <Form.Control name="password" type="password" placeholder="Password"
          value={this.state.password} minLength="8"
          onChange={this.onChange} required/>
        </Form.Group>

        <Form.Group controlId="formBasicName">
          <Form.Label >First Name</Form.Label>
          <Form.Control name="first_name" type="text" placeholder="Enter first name"
          value={this.state.first_name} onChange={this.onChange} required/>
        </Form.Group>

        <Form.Group controlId="formBasicName">
          <Form.Label >Last Name</Form.Label>
          <Form.Control name="last_name" type="text" placeholder="Enter last name"
          value={this.state.last_name} onChange={this.onChange} required/>
        </Form.Group>

        <Form.Group controlId="formBasicName">
          <Form.Label >License Number</Form.Label>
          <Form.Control name="license_number" type="text" placeholder="Enter license number"
          value={this.state.license_number} onChange={this.onChange} minLength="8" required/>
        </Form.Group>

        <Form.Group controlId="formBasicName">
          <Form.Label >Age</Form.Label>
          <Form.Control name="age" type="number" placeholder="Enter age"
          value={this.state.age} onChange={this.onChange} required/>
        </Form.Group>

        <Button variant="primary" value="signup" type="submit"  className="registerbutton">
          Sign Up
        </Button>
      </Form>
      </Col>

      </Row>
      </Container>
    )
  }
}
