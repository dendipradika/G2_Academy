import React, { Component } from 'react';
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Table } from "react-bootstrap";
import Footer from "../parts/Footer";

class DetailAlbumPages extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const foundIdAlbumDetail = this.props.albumsDetail.filter(resultx => resultx.albumId === parseInt(this.props.albumsDetailId.idAlbumForDetail, 10))

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
                            <th>Thumbnail</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            (foundIdAlbumDetail) ?
                            foundIdAlbumDetail.map((Albums, idAlbum) => {
                                return (
                                    <tr key={idAlbum}>
                                        <td>{idAlbum + 1}</td>
                                        <td>{Albums.title}</td>
                                        <td><img src={Albums.thumbnailUrl} /></td>
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

export default DetailAlbumPages;