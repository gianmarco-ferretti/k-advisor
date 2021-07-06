import {Col, Container, Row} from "react-bootstrap";
import MyChecklist from "./MyChecklist";
import MyCard from "./MyCard";
import React from "react";
import MyListHeader from "./MyListHeader";
import {useSelector} from "react-redux";
import MyInfoChecklist from "./MyInfoChecklist";

function MyRestaurantList() {
    const ristoranti = useSelector(state => state.ristoranti);
    const filtri = useSelector(state => state.filtri);


    const rFiltrati = [];

    ristoranti.map((ristorante) => (filtri.includes(ristorante.category.name) ? rFiltrati.push(ristorante) : null))



    return (
        <>
            <MyListHeader></MyListHeader>
            <Container className={'mt-3'}>

                <Row className={'justify-content-center'}>
                    <Col className={'col-12 col-lg-3'}> {/* TODO provare lg={3}*/}
                        <MyChecklist></MyChecklist>
                    </Col>
                    <Col className={'col-12 col-lg-9'}>
                        <h5 className={'text-left'}>I migliori ristoranti di Frosinone</h5>
                        <MyInfoChecklist props={rFiltrati.length}></MyInfoChecklist>
                        <Container fluid={'ListaRistoranti'}>
                            {(rFiltrati.length < 1) ? ristoranti.map((ristorante, i) =>
                                <MyCard ristorante={ristorante} key={i}></MyCard>
                            ) : rFiltrati.map((ristorante, i) =>
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

