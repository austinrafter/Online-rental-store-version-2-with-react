/*Author:Austin Rafter*/
import React, {Component} from 'react'
import {Container,Col, Image, Form, Button} from 'react-bootstrap';
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import './home.css';
import './checkout.css';

/*Austin Rafter*/
export default class Checkout extends Component {
  /*Austin Rafter*/
  constructor(props) {
  super(props);
/*Austin Rafter*/
  this.state = {
    pickup_datetime: '',
    dropoff_datetime:'',
    name: '',
    email: '',
    address: '',
    card_number:'',
    exp_date:'',
    cvv:''


  }
/*Austin Rafter*/
  this.onChange = this.onChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}


/*Austin Rafter*/
onChange(e){
  console.log("handle change", e);

this.setState({
  [e.target.name]: e.target.value
});

}

/*Austin Rafter*/
handleSubmit(event) {
  event.preventDefault();
let token = window.sessionStorage.getItem('jwttoken')
let location=useLocation()
/*Austin Rafter*/
let data  = JSON.stringify({
    carId: this.window.location.pathname.split('/'),    //grab from param in url
    from : this.state.pickup_datetime,
    to: this.state.dropoff_datetime,
    bill: {
      name: this.state.name,
      email: this.state.email,
      address: this.state.address,
      card_number: this.state.card_number,
      exp_date: this.state.exp_date,
      cvv: this.state.cvv},
  })
/*Austin Rafter*/
  console.log(this.window.location.pathname.split('/'));
  axios.post('http://localhost:3000/orders/', data, {
    headers: {
      'Content-Type':'application/json',
      'Authorization': 'Bearer' + token
    }
  })
  .then(res => {
    this.props.history.push(`/`)
  })
}
  /*Austin Rafter*/
  render(){
    return(
    <Container>
    <Image src="assets/morecars.jpg"  className="bg" alt= "bg"/>
    <div className = "checkout-form">
            <Form onSubmit={this.handleSubmit}>
            <h2>Set Pick Up</h2>
          <Form.Row>
          <Form.Group as={Col} controlId="pickUp">
          <Form.Label>Pick Up Date and Time</Form.Label>
          <Form.Control name='pickup_datetime' type="datetime-local" placeholder="1234 Main St" value={this.state.pickup_datetime} onChange={this.onChange} required/>


          </Form.Group>
          </Form.Row>

            <h2>Set Drop Off</h2>
          <Form.Row>
          <Form.Group as={Col} controlId="dropOff">
          <Form.Label>Drop Off Date and Time</Form.Label>
          <Form.Control name='dropoff_datetime' type="datetime-local" placeholder="1234 Main St" value={this.state.dropoff_date} onChange={this.onChange} required/>


        </Form.Group>
        </Form.Row>
        <h2>Billing Address</h2>

              <Form.Group controlId="formGridAddress1" required>
                <Form.Label>Address</Form.Label>
                <Form.Control name='address' placeholder="1234 Main St" value={this.state.address} onChange={this.onChange} required/>
              </Form.Group>


              <Form.Row>

              <Form.Group controlId="formcardnumber" required>
              <Form.Label>Card Number</Form.Label>
              <Form.Control label="Card Number" type="number" name="card_number" imgSrc="https://seeklogo.com/images/V/visa-logo-6F4057663D-seeklogo.com.png" required/>
              </Form.Group>

                <Col>
                  <Form.Group controlId="formexpdate" required>
                  <Form.Label>Exp. Date </Form.Label>
                    <Form.Control label="Expiration Date" type="date" name="exp_date" required/>
                    </Form.Group>
                      </Col>

                  <Col>
                    <Form.Label> CVV </Form.Label>
                    <Form.Control label="CVV" type="number" name="cvv" required/>
                    </Col>
                </Form.Row>


              <Button variant="primary" type="submit" className="registerbutton">
                Submit
              </Button>
            </Form>

            </div>
</Container>
    )
  }
}
