import React from 'react';
import { Input, InputNumeric, FormInline, Button, Container, Row, Col } from 'mdbreact';

class MyProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'John Doe'
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    alert('Input value: ' + this.state.value);
    event.preventDefault();
  }

  saveToState = (value) => {
    this.setState({...this.state, value: value});
  }

  handleChange = (value) => {
    console.log(value);
  }

  render() {
    return (
      <Container className="mt-5">
      <h1 className="text-center mt-4"><strong>Welcome to Circle BMW</strong></h1>
        <Container style={{textAlign: 'initial'}}>
         
          <div>

            <img alt=""
            className="img-fluid"
            src="img/circle_bmw_1600x1200.png"/>

            <form>
             
            </form>
     
          </div>
        </Container>
      </Container>
    );
  }
}

export default MyProfile;
