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
            
                    <div id = "containerforlist">
                        <div id ="checklist">
                        <MyChecklist></MyChecklist>
                        </div>
                        <div id = "card">
                        <h5 className={'text-left'}>
                            I migliori ristoranti di Frosinone
                        </h5>
                        <Container fluid={'ListaRistoranti'}>
                            {ristoranti.map((ristorante, i) =>
                                <MyCard ristorante={ristorante} key={i}></MyCard>
                            )}
                        </Container>
                        </div>
                        </div>
                    
                
           
        </>
    );  
}

export default MyRestaurantList;

