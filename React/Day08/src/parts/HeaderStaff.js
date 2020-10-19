import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Menu from "./Menu"
import "bootstrap/dist/css/bootstrap.min.css";


class HeaderStaff extends Component {
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
                <Menu onClick={() => this.props.goToPage("HOME")} >Home</Menu>
        </Nav>
        <Form inline>
          <Button variant="outline-danger" onClick={() => this.props.goToPage("LOGIN")}>Logout</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}
}

export default HeaderStaff;