/*Author:Austin Rafter, Tim Kim*/
import React, {Component} from 'react';
import { Container, Row, Col, Image, Alert} from 'react-bootstrap';
import './home.css';
import './howitworks.css';

/*Author:Austin Rafter*/
export default class About extends Component {
  render(){
    return(
      /*Author:Austin Rafter*/
      <Container>
      <Image src="assets/morecars.jpg"  className="bg" alt= "bg"/>
      <Row>
      <Col>
      <Alert variant="success">
      /*Author:Tim Kim */
  <Alert.Heading>Rentals to your taste!</Alert.Heading>
  <p>
    <b>YOU</b> get to choose 
    </p>
    <p>
    <p>
    <b>WHAT</b> car you want
    </p>
    <p>
    <b>WHEN</b> you want
    </p>
    <p>
    <b>WHERE</b> you want.

  </p>
  </p>
  <hr />
  <p className="mb-0">
    <b>WE</b> will take care of the rest.
    </p>
</Alert>
      </Col>
      </Row>
        /*Author:Austin Rafter*/
      <Row>
        <Image src="assets/cars3.jpg"  class="img-rounded" className="large-pic" alt= "cars"/>
      </Row>

      </Container>
    )
  }
}
