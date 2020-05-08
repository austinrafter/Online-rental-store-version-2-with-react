import React, {Component} from 'react'
import axios from 'axios'

export default class Cars extends Component {
  constructor(){
    super();
    this.state = {
      'items': []
    }
  }

  componentDidMount(){
    this.getItems();
  }


  getItems(){
    let token = sessionStorage.getItem('jwtToken');
    axios.get('http://localhost:3000/cars/', {
          headers: {
            'Content-Type':'application/json',
            "Authorization": "Bearer " + sessionStorage.getItem("token")
          }
        })
        .then(results => results.json()).then(results => this.setState({ 'items': results.products }));

  }

  render(){
    return(
      <ul>
      {this.state.items.map(function(item,index){
        return<div key="index">
         <h1> {item.name} </h1>
         <p> {item.car_type} </p>
         <p> {item.rate_per_hour}</p>
         <p> {item.description} </p>
         <p> {item.number_of_seats} </p>
         <p> {item.location}</p>
         <p> {item.productImage}</p>
          </div>
      }

      )}
      </ul>

    )
  }
}
