/* Inizio Card demmerda fatta da Fabrizio*/
import React from 'react'
import { Row, Card, Button, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'

export default function MyCard() {
    const ristoranti = useSelector(state => state.ristoranti)
    console.log(ristoranti);
    
    return (
         <div id = 'dinamiccards'>
             <h3>I migliori ristoranti di frosinone</h3>
             <br/> <br/> <br/>
             <h6>tot risultati in tot tempo</h6>
            {ristoranti.map((k,i) => 
           <div id = 'cards'>
            <Card >
                <Row>    
                     <Col className="col-4">
                        <Card.Img id="img" src= {ristoranti[i].photos[0]} />
                     </Col>
                    <Col>
                        <Card.Body className="col-8">
                             <Card.Title> {ristoranti[i].name} </Card.Title>
                             <Card.Text>
                                <a> numero recensioni:{ristoranti[i].num_reviews}</a>
                               
                            </Card.Text>
                            <Card.Footer>
                               
                            </Card.Footer>
                            <Button variant="warning">Prenota</Button>
                     </Card.Body>
                     </Col>
                 </Row>
             </Card>
             </div>)}
             </div>
    )
    }
    
/* Fine Card demmerda fatta da Fabrizio*/