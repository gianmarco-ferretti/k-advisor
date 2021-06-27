import React from 'react'
import { Container,Col,Row } from 'react-bootstrap'
import MyCard from './MyCard'

export default function BodyPag2() {
    return (
        
            <Container>
                <Row>
                <Col xs = {3}>checklist here</Col>
                <Col  id = "CardsColumns" xs ={8}>
            <MyCard/>
            </Col>
            </Row>

            </Container>

      
    )
}
    