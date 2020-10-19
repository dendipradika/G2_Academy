import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Menu from "./Menu"
import "bootstrap/dist/css/bootstrap.min.css";


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
 
  handleSignOut(e) {
    e.preventDefault()
    this.props.onSignOut()
  }

  render() { 
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>G2 Academy</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
                <Menu onClick={() => this.props.goToPage("HOME")} >Home</Menu>
                <Menu onClick={() => this.props.goToPage("ALBUMS")} >List Albums</Menu>
                <Menu onClick={() => this.props.goToPage("UPDATE-PASSWORD")} >Update Password</Menu>
        </Nav>
            <Form onSubmit={this.handleSignOut.bind(this)}>
        <Form inline>
          <Button variant="outline-danger" type="submit">Logout</Button>
        </Form>
            </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}
}

export default Header;