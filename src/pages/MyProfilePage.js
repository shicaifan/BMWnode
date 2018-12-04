import React from 'react';
import { Input, InputNumeric, FormInline, Button, Container, Row, Col } from 'mdbreact';

import $ from  'jquery'
class MyProfile extends React.Component {

  constructor(props) {
    super(props);
    this.id=this.props.match.params.id
    this.state = {
         employee:""
    };
  }

  componentDidMount(){
      this.serverRequest = $.get('http://localhost:3001/users/info?id='+this.id, function (result) {
          result=JSON.parse(result)

          this.setState({
              employee:result
          });
      }.bind(this));
  }

  render() {
    return (
      <Container className="mt-5">
      <h1 className="mt-4"><strong>My Profile</strong></h1>
        <Container style={{textAlign: 'initial'}}>
         
          <div>
            <h4 className="mt-4"><strong>Employee Master Record</strong></h4>
            <form action='http://127.0.0.1:8080/' method='post'>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="EmployeeID">Employee Number</label>
                  <input type="text" className="form-control" id="EmployeeID" placeholder={this.state.employee.EmployeeID}  value={this.state.employee.EmployeeID} />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="SSN">Social Security Number</label>
                  <input type="text" className="form-control" id="SSN" placeholder={this.state.employee.SSN}  value={this.state.employee.SSN}/>
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="FirstName">First Name</label>
                  <input type="text" className="form-control" id="FirstName" value={this.state.employee.FirstName} placeholder={this.state.employee.FirstName} />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="FirstName">Last Name</label>
                  <input type="text" className="form-control" id="LastName" placeholder="Last Name" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="Street">Address</label>
                <input type="text" className="form-control" id="Street" placeholder="1234 Main St" />
              </div>
              <div className="form-group">
                <label htmlFor="HouseAptNum">Address 2</label>
                <input type="text" className="form-control" id="HouseAptNum" placeholder="Apartment, studio, or floor" />
              </div>
              <div className="form-row">
                <div className="form-group col-md-4">
                  <label htmlFor="inputCity">City</label>
                  <input type="text" className="form-control" id="inputCity" placeholder="Eatontown" />
                </div>
                <div className="form-group col-md-4">
                  <label htmlFor="inputZip">State</label>
                  <input type="text" className="form-control" id="State" placeholder="NJ" />
                </div>
                <div className="form-group col-md-4">
                  <label htmlFor="inputZip">Zip</label>
                  <input type="text" className="form-control" id="inputZip" placeholder="07764" />
                </div>
                <div className="form-group col-md-4">
                  <label htmlFor="HomePhone">Home Phone</label>
                  <input type="text" className="form-control" id="HomePhone" placeholder="(732) 123-4567" />
                </div>
                <div className="form-group col-md-4">
                  <label htmlFor="CellPhone">Cell Phone</label>
                  <input type="text" className="form-control" id="CellPhone" placeholder="(732) 123-4567" />
                </div>
                <div className="form-group col-md-4">
                  <label htmlFor="Email">Personal Email</label>
                  <input type="text" className="form-control" id="Email" placeholder="myemail@somewhere.com" />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="BirthDate">Date of Birth</label>
                  <input type="text" className="form-control" id="BirthDate" placeholder="01/01/1981" />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="DateOfHire">Date Employed</label>
                  <input type="text" className="form-control" id="DateOfHire" placeholder="01/01/2018" />
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
