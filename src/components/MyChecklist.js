import React from 'react'
import {Form, Col, Row} from 'react-bootstrap'

export default function MyChecklist() {

    return (
        <div id="filCard" className="ml-4">
            <Col>
                <Row>
                    <h5><strong>Categoria</strong></h5>
                </Row>
                <Row>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Ristoranti"/>
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group controlId="formBasicCheckbox1">
                        <Form.Check type="checkbox" label="Ristoranti senza servizio al tavolo"/>
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group controlId="formBasicCheckbox2">
                        <Form.Check type="checkbox" label="Pasticcerie e gelaterie"/>
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group controlId="formBasicCheckbox3">
                        <Form.Check type="checkbox" label="Caffè e tè"/>
                    </Form.Group>
                </Row>
                <Row>
                    <a href="#" className="mostra"><strong>Mostra di più</strong></a>
                </Row>
                <Row className="mt-4">
                    <h5><strong>Prenotazioni</strong></h5>
                </Row>
                <Row>
                    <Form.Group controlId="formBasicCheckbox4">
                        <Form.Check type="checkbox" label="Prenotazione online"/>
                    </Form.Group>
                </Row>
            </Col>
        </div>
    )
}