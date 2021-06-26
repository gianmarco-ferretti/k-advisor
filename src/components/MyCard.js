/* Inizio Card demmerda fatta da Fabrizio*/
import React from 'react'
import { Row, Card, Button, Col } from 'react-bootstrap'

export default function card() {
    return (
            <Card>
                <Row>
                    <Col className="col-2 p-0">
                        <Card.Img id="img"/>
                    </Col>
                    <Col className="col-10">
                        <Card.Body className="p-0">
                            <Card.Title className="text-start">A tutta pizza Frosinone</Card.Title>
                            <Card.Text className="d-flex mb-0">
                                <div className="d-flex mt-1">
                                    <a className="bubble"></a>
                                    <a className="bubble"></a>
                                    <a className="bubble"></a>
                                    <a className="bubble"></a>
                                    <a className="bubble"></a>
                                </div>
                                <a className="d-flex ms-1">191 recensioni</a>
                                <p className="d-flex ms-1">|</p>
                                <p className="d-flex ms-1 text-danger">Oggi chiuso</p>
                            </Card.Text>
                            <Card.Text className="d-flex">
                                <p>Pizza italiana</p>
                                <p className="ms-1">|</p>
                                <p className="ms-1">€</p>
                                <p className="ms-1">|</p>
                                <a className="ms-1">Menù</a>
                            </Card.Text>
                            <Card.Footer className="d-flex flex-column align-items-start">
                                <p>"Pizza top"</p>
                                <Button variant="warning" className="rounded-pill">Prenota</Button>
                            </Card.Footer>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
    )
}
/* Fine Card demmerda fatta da Fabrizio*/