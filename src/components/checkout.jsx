import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Jumbotron, Container, Row, Col, Image, Form, FormGroup, Label, Input, Button} from 'react-bootstrap';
import './home.css';
import './checkout.css';


export default class Checkout extends Component {
  render(){
    return(
    <Container>
    <Image src="assets/morecars.jpg"  className="bg" alt= "bg"/>
    <div className = "checkout-form">
                <Form>
              <Form.Row>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="Your name" />
              </Form.Group>

                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                  </Form.Row>

              <Form.Group controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="1234 Main St" />
              </Form.Group>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>State</Form.Label>
                  <Form.Control as="select" value="Choose...">
                    <option>Choose...</option>
                    <option>...</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label>Zip</Form.Label>
                  <Form.Control />
                </Form.Group>
              </Form.Row>



              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
            </div>
</Container>
    )
  }
}
