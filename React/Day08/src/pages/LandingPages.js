import React, { Component } from "react";
import Footer from "../parts/Footer";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

class LandingPages extends Component {
  constructor(props) {
    super(props);
      this.state = { }
  }
 
  handleSignIn(e) {
    e.preventDefault()
    let username = this.refs.username.value
    let password = this.refs.password.value
    this.props.onSignIn(username, password)
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
            <h3>Input your account ..</h3>
            <Form onSubmit={this.handleSignIn.bind(this)}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Input your Username" ref="username"/>
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="*****************" ref="password"/>
              </Form.Group>
              <Button variant="primary" type="submit">Login</Button>
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

export default LandingPages;