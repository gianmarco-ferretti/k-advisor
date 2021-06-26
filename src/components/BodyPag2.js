import React from 'react'
import { Container,Col,Row } from 'react-bootstrap'
import MyCard from './MyCard'

export default function BodyPag2() {
    return (
        <div>
            <Container>
                <Row>
                <Col xs = {3}>checklist here</Col>
                <Col  id = "CardsColumns" xs ={8}>
                <h3> I Migliori Ristoranti di Frosinone</h3><br/><br/>
                <a>tot risultati in tot minuti</a><a> cancella tutti i filtri</a>
            <MyCard/>
            </Col>
            </Row>

            </Container>

        </div>
    )
}
    