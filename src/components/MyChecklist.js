import React from 'react'
import {Form, Col, Row} from 'react-bootstrap'
import {useDispatch} from "react-redux";
import {filterRistoranti} from "../actions";

export default function MyChecklist() {


    return (
        <div id="filCard" className="ml-4">
            <Col>
                <Row>
                    <h5><strong>Categoria</strong></h5>
                </Row>
                <Row>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Ristoranti" onClick={()=>filterRistoranti}/>
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group controlId="formBasicCheckbox2">
                        <Form.Check type="checkbox" label="Pasticcerie"/>
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group controlId="formBasicCheckbox3">
                        <Form.Check type="checkbox" label="Caffetterie"/>
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