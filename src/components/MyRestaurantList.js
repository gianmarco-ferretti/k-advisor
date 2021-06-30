import {Col, Container, Row} from "react-bootstrap";
import MyChecklist from "./MyChecklist";
import MyCard from "./MyCard";
import React from "react";
import MyListHeader from "./MyListHeader";

function MyRestaurantList() {
    return (
        <>
            <MyListHeader></MyListHeader>
            <Container fluid >
                <Row >
                   <Col lg={1}></Col>
                    <Col   lg="auto" className={'m-4 '}>
                        <MyChecklist></MyChecklist>
                    </Col>
                    <Col  lg={true}>
                        <h2 className={'text-left'}>
                            I migliori ristoranti di Frosinone
                        </h2>
                        <MyCard></MyCard>
                    </Col>
                    </Row>
             
            </Container>
        </>
    );
}

export default MyRestaurantList;

