/* Inizio Card demmerda fatta da Fabrizio*/
import React from 'react'
import {Row, Card, Button, Col, Container} from 'react-bootstrap'
import {useSelector} from 'react-redux'

import { Link } from 'react-router-dom';


export default function MyCard() {
    const ristoranti = useSelector(state => state.ristoranti)
    

    return (
        <Container fluid={'ListaRistoranti'}>
            {ristoranti.map((k, i) =>
                <Card className={'my-3'} key={i}>
                    <Row>
                        <Col className="col-2 p-0">
                            <Card.Img id="img" src={ristoranti[i].photos[0]}/>
                        </Col>
                        <Col className="col-10 ">
                            <Card.Body className="p-0">
                                <Link to = {{ pathname: '/restaurant' ,state:{i}} }><Card.Title className="text-start">{ristoranti[i].name}</Card.Title></Link>
                                <Card.Text className="d-flex mb-0">
                                    <div className="d-flex mt-1">
                                        {/*TODO FABRIZIO: mettere anche pallini vuoti con display hidden*/}
                                        {/*TODO GIANMARCO: prendere dati sul rating*/}
                                        <a className="bubble"></a>
                                        <a className="bubble"></a>
                                        <a className="bubble"></a>
                                        <a className="bubble"></a>
                                        <a className="bubble"></a>
                                    </div>
                                    <a className="d-flex ms-1">{ristoranti[i].num_reviews}</a>
                                    <p className="d-flex ms-1">|</p>
                                    {/*TODO GIANMARCO: prendere dati sul is_open*/}
                                    <p className="d-flex ms-1 text-danger">Oggi chiuso</p>
                                </Card.Text>
                                <Card.Text className="d-flex">
                                    <p>{ristoranti[i].category.localized_name}</p>
                                    <p className="ms-1">|</p>
                                    <p className="ms-1" id={'fascia_di_prezzo'}>{ristoranti[i].price_level}</p>
                                    <p className="ms-1">|</p>
                                    {/*TODO FABRIZIO: mettere iconcina forchetta e coltello*/}
                                    <a className="ms-1">Menù</a>
                                </Card.Text>
                                <Card.Footer className="d-flex flex-column align-items-start">
                                    <p>{ristoranti[i].address_obj.city}, {ristoranti[i].address_obj.country}</p>
                                    <Button variant="warning" className="rounded-pill">Prenota</Button>
                                </Card.Footer>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
            )}
        </Container>
    )
}
