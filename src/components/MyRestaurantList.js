import {Col, Container, Row} from "react-bootstrap";
import MyChecklist from "./MyChecklist";
import MyCard from "./MyCard";
import React from "react";
import MyListHeader from "./MyListHeader";
import {useSelector} from "react-redux";
import MyInfoChecklist from "./MyInfoChecklist";

function MyRestaurantList() {

//prende i pezzi di state che gli servono

    const ristoranti = useSelector(state => state.ristoranti);
    const filtri = useSelector(state => state.filtri);
    const searchvalue = useSelector(state => state.searchvalue)[0]

    //fa la logica

    const rFiltrati = [];
    ristoranti.map((ristorante) => (filtri.includes(ristorante.category.name) ? rFiltrati.push(ristorante) : null))


    console.log(searchvalue)

    //controllare il tipo di searchvalue to lower case vede solo stringhe
    const Sfiltered =[];
    ristoranti.filter((val)=> {  
        if(searchvalue == "") {
            Sfiltered.push(val)
        }   else if (val.toLowerCase().includes(searchvalue.toLowerCase())) {
            Sfiltered.push(val)
        }   else if (searchvalue == undefined) {
            return null
        }
    })

 console.log(Sfiltered)

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

