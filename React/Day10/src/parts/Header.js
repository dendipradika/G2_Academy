import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom"
import { connect } from "react-redux"
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
  
  signOut() {
    return (
    <Redirect to="/"/>)
  }

  render() { 
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>G2 Academy</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/home"><Menu>Home</Menu></Link>
          <Link to="/albums"><Menu>List Albums</Menu></Link>
        </Nav>
        <Form inline>
          <Button variant="outline-danger" type="submit" onClick={this.signOut}>Logout</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
  }
}

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch({ type: "LOGOUT" })
})


export default connect(mapDispatchToProps)(Header);