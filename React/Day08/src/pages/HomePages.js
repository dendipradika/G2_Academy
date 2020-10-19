import React, { Component } from "react";
import Header from "../parts/Header";
import Footer from "../parts/Footer";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Table } from "react-bootstrap";

class HomePages extends Component {
  render() {
    return (
      <>
        <Container>
          <br/><br/><br/><br/><br/><br/>
          <Row>
            <Col xs lg="3"></Col>
            <Col md="6">
              <br/><h2>Welcome <strong>{ this.props.user.username }</strong>, this is your HRD dashboard </h2>
              <br/>
              <br/>
            </Col>
            <Col xs lg="3"></Col>
          </Row>
          <br/><br/><br/><br/><br/><br/>
        </Container>
        <Footer></Footer>
      </>
    );
  }
}

export default HomePages;