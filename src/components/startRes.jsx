import React, {Component} from 'react'
import {Container, Col, Image, Form, Button} from 'react-bootstrap';
import './home.css';

export default class SearchCar extends Component {
  constructor(props) {
  super(props);

  this.state = {
    type: '',
    make: '',
    model: '',
    color: '',
    mood: ''
  }

  this.onChange = this.onChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}

onChange(e){
  console.log("handle change", e);

this.setState({
  [e.target.name]: e.target.value
});

}

handleSubmit(event) {
  event.preventDefault();
  const{
    type,
    make,
    model,
    color,
    mood
  }=this.state;
}
  render(){
    return(
      <Container>
      <Image src="assets/morecars.jpg"  className="bg" alt= "bg"/>
      <div className = "checkout-form">

      <Form onSubmit={this.handleSubmit} className= "reservation-form">
      <h2>Find Car</h2>
    <Form.Row>

    <Form.Group as={Col} controlId="formGridType">
      <Form.Label>Type</Form.Label>
      <Form.Control name='type' as="select" value={this.state.type}  onChange={this.onChange}>
      <option value="coupe">Coupe</option>
      <option value="sedan">Sedan</option>
      <option value="suv">SUV</option>
      <option value="convertible">Convertible</option>
      <option value="hatchback">Hatchback</option>
      <option value="sports">Sports Cars</option>
      <option value="luxury">Luxury Cars</option>
      <option value="truck">Truck</option>
      <option value="minivan">Minivan</option>
      <option value="Van">Van</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridMake">
      <Form.Label>Make</Form.Label>
      <Form.Control name='make' as="select" value={this.state.make} onChange={this.onChange}>
      <option value="Acura">Acura</option>
      <option value="AlfaRomeo">Alfa Romeo</option>
      <option value="Audi">Audi</option>
      <option value="BMW">BMW</option>
      <option value="Bentley">Bentley</option>
      <option value="Cadillac">Cadillac</option>
      <option value="Chevrolet">Chevrolet</option>
      <option value="Chrysler">Chrysler</option>
      <option value="Dodge">Dodge</option>
      <option value="Fiat">Fiat</option>
      <option value="Ford">Ford</option>
      <option value="GMC">GMC</option>
      <option value="Genesis">Genesis</option>
      <option value="Honda">Honda</option>
      <option value="Hyundai">Hyundai</option>
      <option value="Infinity">Infinity</option>
      <option value="Jaguar">Jaguar</option>
      <option value="Kia">Kia</option>
      <option value="Landrover">Land Rover</option>
      <option value="Lexus">Lexus</option>
      <option value="Lincoln">Lincoln</option>
      <option value="Maserati">Maserati</option>
      <option value="Mazda">Mazda</option>
      <option value="Mercedes">Mercedes-Benz</option>
      <option value="Mercury">Mercury</option>
      <option value="Mini">Mini</option>
      <option value="Mitsubishi">Mitsubishi</option>
      <option value="Nissan">Nissan</option>
      <option value="Polestar">Polestar</option>
      <option value="Pontiac">Pontiac</option>
      <option value="Porsche">Porsche</option>
      <option value="Ram">Ram</option>
      <option value="Rivian">Rivian</option>
      <option value="Saab">Saab</option>
      <option value="Saturn">Saturn</option>
      <option value="Scion">Scion</option>
      <option value="Smart">Smart</option>
      <option value="Subaru">Subaru</option>
      <option value="Suzuki">Suzuki</option>
      <option value="Tesla">Tesla</option>
      <option value="Toyota">Toyota</option>
      <option value="Volkswagen">Volkswagen</option>
      <option value="Volvo">Volvo</option>
      </Form.Control>
    </Form.Group>
    </Form.Row>



    <Form.Group controlId="formGridModel" >
      <Form.Label>Model</Form.Label>
      <Form.Control name='model' placeholder="Enter model"  value={this.state.model} onChange={this.onChange} />
    </Form.Group>



    <Form.Group controlId="formGridColor">
      <Form.Label>Color</Form.Label>
      <Form.Control name='color' placeholder="Enter color"  value={this.state.color} onChange={this.onChange} />
    </Form.Group>
    <Form.Row>
    <Form.Group as={Col} controlId="formGridMood" >
      <Form.Label>Mood</Form.Label>
      <Form.Control as="select" name='mood' value={this.state.mood} onChange={this.onChange}>
      <option value="none">N/A</option>
      <option value="Cheerful">Cheerful </option>
      <option value="Peaceful">Peaceful</option>
      <option value="Stressed">Stressed</option>
      <option value="Mellow">Mellow</option>
      <option value="Melancholy">Melancholy</option>
      </Form.Control>
    </Form.Group>
    </Form.Row>

      <Button variant="primary" type="submit">
        Find Car
      </Button>

    </Form>

    </div>
      </Container>
    )
  }
}
