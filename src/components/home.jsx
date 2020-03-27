import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Jumbotron, Container, Row, Col, Image, Form, FormGroup, Label, Input, Button} from 'react-bootstrap';
import './home.css';

export default class Home extends Component {
  render() {
    return (

      <Container>
      <div className= "bg-color">
      <Image src="assets/morecars.jpg"  className="bg" alt= "bg"/>

        <Jumbotron>
          <h2> Making online car rental EZ-PZ </h2>

        </Jumbotron>
        <Row className= "show-container-text-center">

        <Col xs={12} sm={4} className="cancelRes-wrapper">
        <Form>
        <h3> Cancel Reservation </h3>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicConfirmation">
          <Form.Label>Confirmation Number</Form.Label>
          <Form.Control type="text" placeholder="Confirmation Number" />
          <Form.Text className="text-muted">
            The confirmation number given when you made your reservation.
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Cancel Reservation
        </Button>
        </Form>
        </Col>
        </Row>


         </div>
      </Container>
    )
  }
}
