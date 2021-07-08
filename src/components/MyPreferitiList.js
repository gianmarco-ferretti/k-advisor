import React from 'react';
import {useSelector} from "react-redux";
import MyCard from "./MyCard";
import {Container, Row} from "react-bootstrap";

function MyPreferitiList() {
    const rPreferiti = useSelector(state => state.ristorantiPreferiti)

    return (
        <>
            <Container fluid className={'bg-white'} id={'Intestazione-container'}>
                <Row className={'justify-content-center  intestazione'}>
                    <h3 className={'align-self-end'}>Ristoranti Preferiti</h3>
                </Row>
            </Container>
            <Container>
                {rPreferiti.map((ristorante, i) =>
                    <MyCard ristorante={ristorante} key={i}></MyCard>
                )}
            </Container>
        </>

    );
}

export default MyPreferitiList;