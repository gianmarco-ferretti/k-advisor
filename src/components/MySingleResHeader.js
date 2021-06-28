import React from 'react'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { Container,Row } from 'react-bootstrap';


export default function MySingleResHeader() {
     //Ho usato useLocation (passando un oggetto al Link del child) per avere il value su questo file
    const location = useLocation();
    const index = location.state.i 
    const ristoranti = useSelector(state => state.ristoranti)
    
    //to do pulire questa funzione (arrow function)

    function IsOpen(ristoranti,index)  {
            if ( ristoranti[index].is_open == false) {
                    return 'Chiuso';
            } else if (ristoranti[index].is_open == true) {
                return 'Aperto';
            }
    }
    let open = IsOpen(ristoranti,index);    

    console.log(ristoranti[index])
    console.log(index)

    //todo formattazzione grafica
    return (
        <Container fluid className={'bg-white'} id={'IntestazioneSingle-container'}>
            <Row className={'justify-content-left  intestazione'}>
                <h3 className={'align-self-end'}>{ristoranti[index].name}</h3>
            </Row>
            <Row className={'justify-content-left  intestazione'}>
                <a className="bubble"></a>
                <a className="bubble"></a>
                <a className="bubble"></a>
                <a className="bubble"></a>
                <a className="bubble"></a>
                <a>{ristoranti[index].num_reviews}</a>
                <a> |{ristoranti[index].price_level}</a>
            </Row>
            <Row className={'justify-content-left  intestazione'}>
                <a>{ristoranti[index].address_obj.city} {ristoranti[index].address_obj.country} </a>
                <a> | {ristoranti[index].phone}</a>
                <a> | sito web</a>
                <a> | Menù </a>
                <a> | {open} </a>
            </Row>  
        </Container>    
      
    )
    }
