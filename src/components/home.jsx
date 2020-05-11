/*Author:Austin Rafter*/

import React, {Component} from 'react'
import axios from 'axios';
import {Jumbotron, Container, Row, Col, Image, Form, Button} from 'react-bootstrap';
import { Redirect } from "react-router-dom";
import './home.css';

/*Austin Rafter*/
export default class Home extends Component {
  constructor(props) {
  super(props);


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
  
  /*Austin Rafter*/
  let token = window.sessionStorage.getItem('jwttoken')
  let removetoken= window.sessionStorage.removeItem('jwttoken')
  if(token){
    return removetoken
    this.props.history.push('/');
 }
}
  /*Austin Rafter*/
  render() {
    return (

      <Container>
      <div className= "bg-color">
      <Image src="assets/morecars.jpg"  className="bg" alt= "bg"/>


        <Jumbotron className="home-jumbo">
          <h2> Making online car rental EZ-PZ </h2>
          <Button variant="primary" onClick={this.handleSubmit}  type="submit" className="logoutbutton" >
            Logout
          </Button>
        </Jumbotron>


        <Row className= "show-container-text-center">


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
