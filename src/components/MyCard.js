import React from 'react';
import {Row, Card, Button, Col, Container} from 'react-bootstrap';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import MyModalPrenota from "./MyModalPrenota";
import MyRating from "./MyRating";


export default function MyCard() {
    const ristoranti = useSelector(state => state.ristoranti)
    const [modalShow, setModalShow] = React.useState(false); //popup

    return (
        <Container fluid={'ListaRistoranti'}>
            {ristoranti.map((ristorante, i) =>
                <Card className={'my-3'} key={i}>
                    <Row>
                        <Col className="col-4 p-0 ">
                            <Card.Img id="img" src={ristorante.photos[0]}/>
                        </Col>
                        <Col className="col-8 ">
                            <Card.Body className="p-0">
                                {/*   TODO GIANMARCO: mettere path dinamico con tilde e $*/}
                                <Link to={{pathname: '/restaurant', state: {i}}}><Card.Title
                                    className="text-start">{ristorante.name}</Card.Title></Link>
                                <Card.Text className="d-flex mb-0">
                                    <MyRating score={ristorante.rating}/>
                                    <a className="d-flex mx-1">{ristorante.num_reviews}</a>
                                    <span className="d-flex ms-1">|</span>
                                    {/*TODO GIANMARCO: prendere dati sul is_open*/}
                                    <span className="d-flex ms-1 text-danger">Oggi chiuso</span>
                                </Card.Text>
                                <Card.Text className="d-flex">
                                    <span>{ristorante.category.localized_name}</span>
                                    <span className="ms-1">|</span>
                                    <span className="ms-1" id={'fascia_di_prezzo'}>{ristorante.price_level}</span>
                                    <span className="ms-1">|</span>
                                    {/*TODO FABRIZIO: mettere iconcina forchetta e coltello*/}
                                    <a className="ms-1">Menù</a>
                                </Card.Text>
                                <Card.Footer className="d-flex flex-column align-items-start">
                                    <p>{ristorante.address_obj.city}, {ristorante.address_obj.country}</p>
                                    <Button variant="warning" className="rounded-pill font-weight-bold btn-prenota"
                                            onClick={() => setModalShow(true)}>Prenota</Button>
                                    <MyModalPrenota
                                        show={modalShow}
                                        onHide={() => setModalShow(false)}
                                    />
                                </Card.Footer>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
            )}
        </Container>
    )
}
