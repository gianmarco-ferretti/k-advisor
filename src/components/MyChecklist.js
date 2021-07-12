import React from "react";
import {Form, Col, Row, Container} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {addFilter, removeAllSearch, removeFilter} from "../actions";

export default function MyChecklist() {
    const dispatch = useDispatch();

    const handleClick = (e) => {
        if (e.target.checked) {
            dispatch(addFilter(e.target.name))
            dispatch(removeAllSearch(e.target.value))
        } else {
            dispatch(removeFilter(e.target.name))
        }
    }

    return (
        <Container className="bg-white mb-3">
            <Row className={'py-2'}>
                <Col>
                    <h5><strong>Categoria</strong></h5>
                    <Form.Check type="checkbox" name="restaurant" label="Ristoranti" onChange={handleClick}/>
                    <Form.Check type="checkbox" name="pastry" label="Pasticcerie e gelaterie" onChange={handleClick}/>
                    <Form.Check type="checkbox" name="cafe" label="Caffè e tè" onChange={handleClick}/>
                    <p className="text-body mostra-underlined"><strong>Mostra di più</strong></p>
                    <hr></hr>
                    <h5><strong>Prenotazioni</strong></h5>
                    <Form.Check type="checkbox" name="true" label="Prenotabile" onChange={handleClick}/>
                </Col>
            </Row>
        </Container>
    );
}