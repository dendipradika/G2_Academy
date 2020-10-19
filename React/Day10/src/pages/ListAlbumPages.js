import React, { Component } from 'react';
import { connect } from "react-redux"
import { Container, Row, Col, Table, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom"
import Menu from "../parts/Menu"

class ListAlbumPages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then(response => response.json())
    .then(json => this.setState({ albums: json}))
  }

  render() {
    const founds = this.state.albums.filter(elements => elements.userId === this.props.userLoginId);
    return (
    <>
    <br/><br/><br/>
      <Container>
        <Row>
          <Col xs lg="2"></Col>
          <Col md="8" className="block-example border border-default">
            <br/><h3>List Albums</h3><br/>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th width="20px">No</th>
                  <th>Title</th>
                  <th>#</th>
                </tr>
              </thead>
              <tbody>
                {
                  (founds) ?
                  founds.map((Albums, idAlbum) => {
                    return (
                      <tr key={idAlbum}>
                        <td>{idAlbum + 1}</td>
                        <td>{Albums.title}</td>
                        <td>
                          <Link to={ "/albums-detail/" + Albums.id }><Menu>Detail</Menu></Link>
                        </td>
                      </tr>
                    )
                  })
                  : <><tr><td colspan="3">No Albums</td></tr></>
                }
              </tbody>
            </Table>
          </Col>
          <Col xs lg="2"></Col>
        </Row>
        <br/><br/><br/>
      </Container>
    </>
    );
  }
}

const mapStateToProps = (state) => ({
    isLogin: state.auth.isLogin,
    userLogin: state.auth.user,
    userLoginId: state.auth.userId
  })

const mapDispatchToProps = (dispatch) => ({
  doLogin: (user) => dispatch({ type: "SETDATA", payload: user })
})

export default connect(mapStateToProps, mapDispatchToProps)(ListAlbumPages);