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
      <h1 className="mt-4"><strong>My Profile</strong></h1>
        <Container style={{textAlign: 'initial'}}>
         
          <div>

            
            
            <h4 className="mt-4"><strong>Form layout</strong></h4>
            <form>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="inputEmail4">Email</label>
                  <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="inputPassword4">Password</label>
                  <input type="password" className="form-control" id="inputPassword4" placeholder="Password" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="inputAddress">Address</label>
                <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
              </div>
              <div className="form-group">
                <label htmlFor="inputAddress2">Address 2</label>
                <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="inputCity">City</label>
                  <input type="text" className="form-control" id="inputCity" placeholder="Eatontown" />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="inputZip">Zip</label>
                  <input type="text" className="form-control" id="inputZip" placeholder="07764" />
                </div>
              </div>
              <button type="submit" className="btn btn-primary btn-md">Submit</button>
            </form>
            
           
           
          </div>
        </Container>
      </Container>
    );
  }
}

export default MyProfile;
