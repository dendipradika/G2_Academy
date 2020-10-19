import React, { Component } from 'react';
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Table } from "react-bootstrap";
import Footer from "../parts/Footer";

class DataPegawaiPages extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
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
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.contacts.map((contact, idx) => {
                                return (
                                    <tr key={idx}>
                                        <td>{idx + 1}</td>
                                        <td>{contact.name}</td>
                                    </tr>
                                )
                            })
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

export default DataPegawaiPages;