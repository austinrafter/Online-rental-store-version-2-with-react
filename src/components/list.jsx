import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {Jumbotron, Container, Row, Col, Image, Form, FormGroup, Label, Input, Button} from 'react-bootstrap';
import './home.css';
import './signUp.css';

export default class SignUp extends Component {
async componentDidMount(){
  const url=  "https://jsonplaceholder.typicode.com/posts";

  const posts = await fetch(url);
  console.log(posts);
}

  render() {
    return(
      <div>

      </div>
    )
  }
}
