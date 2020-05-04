import React, {Component} from 'react'
import axios from 'axios';
import {Jumbotron, Container, Row, Col, Image, Form, Button} from 'react-bootstrap';
import './home.css';


export default class Home extends Component {
  constructor(props) {
  super(props);

  this.state ={
    email:'',
    confirmationNumber: '',
    cancelResErrors: ''
  }

  this.handleSubmit = this.handleSubmit.bind(this);
  this.onChange = this.onChange.bind(this);
  this.handleLogoutClick = this.handleLogoutClick.bind(this);
}

handleLogoutClick(){
  axios.delete("",{withCredentials:true}).then(response =>{
    this.props.handleLogout();
  }).catch(error => {
    console.log("logout error", error);
  });

}

onChange(e){
  console.log("handle change", e);

this.setState({
  [e.target.name]: e.target.value
});
}

handleSubmit(event) {
  event.preventDefault();
  const {
    email,
    confirmationNumber
  }=this.state;
  axios.post("", {
    user:{
      email:email,
      confirmationNumber:confirmationNumber
    }
  },
{withCredentials: true}
).then(response =>{
  console.log("res from cancel res", response)
}).catch(error => {
  console.log("cancel reservation error", error)
  return{hasError: true}
})
}
  render() {
    return (

      <Container>
      <div className= "bg-color">
      <Image src="assets/morecars.jpg"  className="bg" alt= "bg"/>


        <Jumbotron className="home-jumbo">
          <h2> Making online car rental EZ-PZ </h2>
          <h3> Hello, {this.props.name} </h3>
          <Button name="logout_button" className="logout-button" variant="outline-danger"
          onClick={() => this.handleLogoutClick()} disabled>
          Logout
          </Button>{' '}



        </Jumbotron>


        <Row className= "show-container-text-center">

        <Col xs={12} sm={4} className="cancelRes-wrapper">
        <Form onSubmit={this.handleSubmit}>
        <h3> Cancel Reservation </h3>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" value={this.state.email} onChange={this.onChange} required/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicConfirmation">
          <Form.Label>Confirmation Number</Form.Label>
          <Form.Control name="confirmationNumber" type="text" placeholder="Confirmation Number"  value={this.state.confirmationNumber} onChange={this.onChange} required/>
          <Form.Text className="text-muted">
            The confirmation number given when you made your reservation.
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit" className="registerbutton">
          Cancel Reservation
        </Button>
        </Form>
        </Col>
        <Col>

        </Col>
        </Row>
        <Row>
        <Col>
        </Col>
        <Col>
        <Jumbotron className= "home-picture-jumbo">
        <p><b>Any car for every need</b> </p>
        <Image src="assets/carsforbackground.jpg"  className="small-pic" alt= "cars"/>
        </Jumbotron>
        </Col>
        </Row>


         </div>
      </Container>
    )
  }
}
