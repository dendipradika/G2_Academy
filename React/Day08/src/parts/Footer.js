import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-md-center">
        &copy;Copright 2020. Creating for study
      </Navbar.Collapse>
    </Navbar>
  );
}
}

export default Footer;