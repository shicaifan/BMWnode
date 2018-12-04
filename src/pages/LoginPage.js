import React from 'react';
import { Container, Row, Col, Input, Button } from 'mdbreact';
import $ from  'jquery'

class FormsPage extends React.Component  {

  handleClick = () => {
      $.ajax({
          type: 'POST',
          url: "http://localhost:3001/users/login",
          data: {
              username: $("#name").val(),
              password: $("#password").val()
          } ,
          success: function (data) {
              if(data['pass']){
                  window.location="/Myprofile/"+data.content.hr_id;
              }else{
                  alert("username or password error");
              }
          },
          error : function() {
              alert("server error！");
          },
          dataType: "json"
      });

  }

  render() {
    return(
      <Container>
        <Row>
          <Col md="6">
            <form action='' method='post'>
            <h3 className="h3 text-center mt-4"><strong>Welcome to Circle BMW</strong></h3>
            <h1 className="mt-4"><strong> </strong></h1>   
              <p className="h5 text-center mb-4">Please sign in</p>
              <div className="grey-text">
                <Input label="Type your username" icon="envelope" group type="username" name="username" id="name" validate error="wrong" success="right"/>
                <Input label="Type your password" icon="lock" group type="password" name="password"  id="password" validate/>
              </div>
              <div className="text-center">
                <Button className="btn btn-indigo" type="button" onClick={this.handleClick}>Login</Button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
      
    );
  }
};


export default FormsPage;



