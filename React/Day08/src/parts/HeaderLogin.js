import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


class HeaderLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>G2 Academy</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        </Nav>
        <Form inline>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}
}

export default HeaderLogin;