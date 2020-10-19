import React, { Component } from "react";
import { connect } from "react-redux"
import { Container, Row, Col, Table } from "react-bootstrap";

class HomePages extends Component {
  render() {
    return (
      <>
        <Container>
          <br/><br/><br/><br/><br/><br/>
          <Row>
            <Col xs lg="3"></Col>
            <Col md="6">
              <br/><h2>Welcome <strong>{ this.props.userLogin }</strong>, this is your HRD dashboard </h2>
              <br/>
              <br/>
            </Col>
            <Col xs lg="3"></Col>
          </Row>
          <br/><br/><br/><br/><br/><br/>
        </Container>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  isLogin: state.auth.isLogin,
  userLogin: state.auth.user
})

export default connect(mapStateToProps)(HomePages);