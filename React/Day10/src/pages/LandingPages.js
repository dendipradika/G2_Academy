import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom"
import { connect } from "react-redux"
import Menu from "../parts/Menu"
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

class LandingPages extends Component {
  constructor(props) {
    super(props);
      this.state = {
        username: "",
        password: "",
        accountLogin: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => this.setState({ accountLogin: json}))
    .catch(err => alert(err))
  }

  setValue = e => {
    console.log(e.target.value)
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  doLogin = async () => {
    const { username, password } = this.state    
    this.state.accountLogin.forEach((account) => {
      if (username === account.username && password === "123") {
        return (
          this.props.doLogin(username, account.id),
          <Redirect to="/home"/>
          )
      } else {
        return console.log("Use Default Password")
      }
    })
  }

  render() {
    if (this.props.isLogin)
        return <Redirect to="/home" />
    return (
      <>
      <Container>
        <br/><br/><br/>
        <Row>
          <Col xs lg="3"></Col>
          <Col md="6" className="block-example border border-info">
            <br/>
            <h3>Input your account ..</h3>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Input your Username" name="username" onChange={this.setValue}/>
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="*****************" name="password" onChange={this.setValue}/>
              </Form.Group>
              <Button variant="primary" type="submit" onClick={this.doLogin}>Login</Button>
            <br/>
            <Link to="/register"><Menu>Do you haven't a account?</Menu></Link>
            <br/>
          </Col>
          <Col xs lg="3"></Col>
        </Row>
        <br/><br/><br/>
      </Container>
      </>
    );
  }
}


const mapStateToProps = (state) => ({
  isLogin: state.auth.isLogin
})

const mapDispatchToProps = (dispatch) => ({
  doLogin: (user, userId) => dispatch({ type: "LOGIN", payload: user, loadId: userId })
})


export default connect(mapStateToProps, mapDispatchToProps)(LandingPages);