import React from 'react';
import {Container, Row} from "react-bootstrap";

function MyListHeader() {
    return (
        <Container fluid className={'bg-white'} id={'Intestazione-container'}>
            <Row className={'justify-content-center  intestazione'}>
                <h3 className={'align-self-end text-center'}>I migliori ristoranti di Frosinone</h3>
            </Row>
        </Container>
    );
}

export default MyListHeader;