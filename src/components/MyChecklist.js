import React from "react";
import {Form, Col, Row, Container} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {addFilter, removeFilter} from "../actions";

export default function MyChecklist() {
    const dispatch = useDispatch();

    const handleClick = (e) => {
        if (e.target.checked) {
            dispatch(addFilter(e.target.name))
        }else {
            dispatch(removeFilter(e.target.name))
        }
    }

    return (
        <Container id="filCard">
            <Row className={'pt-2'}>
                <Col>
                    <h5><strong>Categoria</strong></h5>
                    <Form.Check type="checkbox" name="restaurant" label="Ristoranti" onChange={handleClick}/>
                    <Form.Check type="checkbox" name="pastry" label="Pasticcerie e gelaterie" onChange={handleClick}/>
                    <Form.Check type="checkbox" name="cafe" label="Caffè e tè" onChange={handleClick}/>
                    <a href="#" className="mostra"><strong>Mostra di più</strong></a>
                    <hr></hr>
                    <h5><strong>Prenotazioni</strong></h5>
                    <Form.Check type="checkbox" label="Prenotazione online"/>
                </Col>
            </Row>
        </Container>
    );
}