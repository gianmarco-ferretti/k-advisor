import React from "react";
import { Form, Col, Row, Container } from "react-bootstrap";

export default function MyChecklist() {
  return (
    <Container id="filCard" className="m-2 p-md-3">
      <Col>
        <Row>
          <h5>
            <strong>Categoria</strong>
          </h5>
        </Row>
        <Row>
          <Form.Check type="checkbox" label="Ristoranti" />
        </Row>
        <Row>
          <Form.Check
            className="float-left text-justify-left"
            type="checkbox"
            label="Ristoranti senza servizio al tavolo"
          />
        </Row>

        <Row>
          <Form.Check type="checkbox" label="Pasticcerie e gelaterie" />
        </Row>
        <Row>
          <Form.Check type="checkbox" label="Caffè e tè" />
        </Row>
        <Row>
          <a href="#" className="mostra">
            <strong>Mostra di più</strong>
          </a>
        </Row>
        <hr></hr>
        <Row className="mt-4">
          <h5>
            <strong>Prenotazioni</strong>
          </h5>
        </Row>

        <Row>
          <Form.Group controlId="formBasicCheckbox4">
            <Form.Check type="checkbox" label="Prenotazione online" />
          </Form.Group>
        </Row>
      </Col>
    </Container>
  );
}
