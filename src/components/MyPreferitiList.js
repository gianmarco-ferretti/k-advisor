import React from 'react';
import {useSelector} from "react-redux";
import MyCard from "./MyCard";
import {Container} from "react-bootstrap";

function MyPreferitiList() {
    const rPreferiti = useSelector(state => state.ristorantiPreferiti)

    return (
        <Container>
            {rPreferiti.map((ristorante, i) =>
                <MyCard ristorante={ristorante} key={i}></MyCard>
            )}
        </Container>

    );
}

export default MyPreferitiList;