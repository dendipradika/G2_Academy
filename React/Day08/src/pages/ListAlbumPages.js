import React, { Component } from 'react';
import { Container, Row, Col, Table, Form, Button } from "react-bootstrap";
import Footer from "../parts/Footer";

class ListAlbumPages extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
 
    getIdAlbum(e) {
      e.preventDefault()
      for(var i = 1; i<=10; i++) {
          let idAlbumForDetail = this.refs.idAlbumForDetail2.value
          this.props.onGetIdAlbum(idAlbumForDetail)
      }
    }

    render() {
        const found = this.props.contacts.find(element => element.username === this.props.user.username);
        const founds = this.props.albums.filter(elements => elements.userId === found.id);
        return (
            <>
            <Container>
              <br/><br/><br/>
              <Row>
                <Col xs lg="2"></Col>
                <Col md="8" className="block-example border border-info"><br/>
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
                                                <Form.Control type="button" 
                                                value={Albums.id} 
                                                ref={ "idAlbumForDetail" + Albums.id}
                                                onClick={this.getIdAlbum.bind(this)}/>
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
        <Footer></Footer>
            </>
        );
    }
}

export default ListAlbumPages;