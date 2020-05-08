import React from 'react';
import ReactDOM from 'react-dom';

class ContentFeed extends React.Component {
  constructor(){
    super();


    this.state = {
      'items': []
    }
  }

  componentDidMount() {
    this.getItems();
  }

  getItems(){
    fetch('http://localhost:8000/api/item/')
    .then(results => results.json())
    .then(results => this.setState({'items': results}));
  }

  render() {
    return(
      <section id="car-list-area" class="section-padding">
          <div class="container">
              <div class="row">
                  <div class="col-lg-12">
                      <div class="car-list-content">
                          <div class="row">
                              <div class="col-lg-6 col-md-6">
                                  <div class="single-car-wrap">
                                      <div class="car-list-thumb car-thumb-1"></div>
                                      <div class="car-list-info without-bar">
                                      <ul>
                                        {this.state.items.map(function(item, index)) {
                                          return(
                                            <h2><a href="#">{item.name}</a></h2>
                                            <h5>39$ Rent /per a day</h5>
                                            <p class="rating">
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star unmark"></i>
                                            </p>
                                            <a href="/checkout" class="rent-btn">Book It</a>
                                          )
                                        }}
                                      </ul>
                                      </div>
                                  </div>
                              </div>
    );
  }
}
