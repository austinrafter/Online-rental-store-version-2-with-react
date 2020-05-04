import React, {Component} from 'react';
import { Container, Row, Col, Image, Alert} from 'react-bootstrap';
import './home.css';
import './howitworks.css';

export default class About extends Component {
  render(){
    return(
      <Container>
      <Image src="assets/morecars.jpg"  className="bg" alt= "bg"/>
      <Row>
      <Col>
      <Alert variant="success">
  <Alert.Heading>Rentals when you want them and how you want them</Alert.Heading>
  <p>
    <b>You</b> get to choose what car you want, when <b>you</b> will have it, and where <b>you</b> pick
    it up from.
  </p>
  <hr />
  <p className="mb-0">
    <b>We</b> will take care of the rest.
    </p>
</Alert>
      </Col>
      </Row>
      <Row>
        <Image src="assets/cars3.jpg"  class="img-rounded" className="large-pic" alt= "cars"/>
      </Row>

      </Container>
    )
  }
}
