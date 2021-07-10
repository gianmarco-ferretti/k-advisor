import React from 'react'
import MySingleResHeader from './MySingleResHeader'
import MyCarousel from './MyCarousel'
import {useLocation} from 'react-router';
import MyMenu from './MyMenu';
import MyComSec from './MyComSec';
import { Col,Container,Row } from 'react-bootstrap';


export default function MySingleResaturant() {
    const location = useLocation();
    const ristorante = location.state.ristorante;
    console.log(ristorante)

    return (
        <Container>
             <Row>
            <MySingleResHeader ristorante={ristorante}/>
            <MyCarousel ristorante= {ristorante}/>
            <MyMenu ristorante={ristorante}/>
           
            <Col className={"col-8 "}>
            <MyComSec ristorante={ristorante}/>
            </Col>
            <Col lassName={"col-4"}>
            </Col>
            </Row>
        </Container>
    )
}
