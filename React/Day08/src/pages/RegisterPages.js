import React, { Component } from "react";
import Footer from "../parts/Footer";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

class RegisterPages extends Component {
  constructor(props) {
      super(props);
      this.state = {
        username: "",
        oldPassword: "",
        newPassword: ""
      }
  }

  setValue = e => {
      this.setState({
          [e.target.name]: e.target.value
      })
  }


  doUpdatePassword = () => {
      const { username, oldPassword, newPassword } = this.state
      this.props.newPassword({ username, oldPassword, newPassword })
  }

  render() {
    return (
      <>
      <Container>
        <br/><br/><br/>
        <Row>
          <Col xs lg="3"></Col>
          <Col md="6" className="block-example border border-info">
            <br/>
            <h3>Update Password</h3>
            <Form>
              <Form.Group controlId="formGridAddress1">
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="text" onChange={this.setValue} value={ this.props.user.username } readOnly="readonly" />
              </Form.Group>
              <Form.Group controlId="formGridAddress1">
                  <Form.Label>Ketik ulang username sebagai validasi</Form.Label>
                  <Form.Control type="text" name="username" onChange={this.setValue} />
              </Form.Group>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Old Password</Form.Label>
                  <Form.Control type="text" placeholder="******************" name="oldPassword" onChange={this.setValue}/>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>New Password</Form.Label>
                <Form.Control type="text" placeholder="******************" name="newPassword" onChange={this.setValue}/>
                </Form.Group>
              </Form.Row>
              <Button variant="primary" onClick={this.doUpdatePassword}>
                Update Password
              </Button>
            </Form>
            <br/>
          </Col>
          <Col xs lg="3"></Col>
        </Row>
        <br/><br/><br/>
      </Container>
        <Footer></Footer>
      </>
    );
  }
}

export default RegisterPages;