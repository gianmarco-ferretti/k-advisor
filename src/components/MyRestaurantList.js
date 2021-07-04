import {Col, Container, Row} from "react-bootstrap";
import MyChecklist from "./MyChecklist";
import MyCard from "./MyCard";
import React from "react";
import MyListHeader from "./MyListHeader";
import {useSelector} from "react-redux";

function MyRestaurantList() {
    const ristoranti = useSelector(state => state.ristoranti);



    return (
        <>
            <MyListHeader></MyListHeader>
            <Container className={'mt-3'}>
                <Row className={'justify-content-center'}>
                    <Col md={2} className={'mx-2'}>
                        <MyChecklist></MyChecklist>
                    </Col>
                    <Col md={9}>
                        <h5 className={'text-left'}>
                            I migliori ristoranti di Frosinone
                        </h5>
                        <Container fluid={'ListaRistoranti'}>
                            {ristoranti.map((ristorante, i) =>
                                <MyCard ristorante={ristorante} key={i}></MyCard>
                            )}
                        </Container>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default MyRestaurantList;

