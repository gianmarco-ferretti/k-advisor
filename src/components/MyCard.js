/* Inizio Card demmerda fatta da Fabrizio*/
import React from 'react'
import { Row, Card, Button, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'

<<<<<<< HEAD
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
=======
export default function card() {
    return (
            <Card>
                <Row>
                    <Col className="col-2 p-0">
                        <Card.Img id="img"/>
                    </Col>
                    <Col className="col-10">
                        <Card.Body className="p-0">
                            <Card.Title className="text-start">A tutta pizza Frosinone</Card.Title>
                            <Card.Text className="d-flex mb-0">
                                <div className="d-flex mt-1">
                                    <a className="bubble"></a>
                                    <a className="bubble"></a>
                                    <a className="bubble"></a>
                                    <a className="bubble"></a>
                                    <a className="bubble"></a>
                                </div>
                                <a className="d-flex ms-1">191 recensioni</a>
                                <p className="d-flex ms-1">|</p>
                                <p className="d-flex ms-1 text-danger">Oggi chiuso</p>
                            </Card.Text>
                            <Card.Text className="d-flex">
                                <p>Pizza italiana</p>
                                <p className="ms-1">|</p>
                                <p className="ms-1">€</p>
                                <p className="ms-1">|</p>
                                <a className="ms-1">Menù</a>
                            </Card.Text>
                            <Card.Footer className="d-flex flex-column align-items-start">
                                <p>"Pizza top"</p>
                                <Button variant="warning" className="rounded-pill">Prenota</Button>
                            </Card.Footer>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
>>>>>>> 308f0edb8fc63ff755ef98cb8e3a4aae75cbad6c
    )
    }
    
/* Fine Card demmerda fatta da Fabrizio*/