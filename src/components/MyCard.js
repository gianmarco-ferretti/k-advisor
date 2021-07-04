import React, {useState} from 'react';
import {Row, Card, Button, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import MyModalPrenota from "./MyModalPrenota";
import MyRating from "./MyRating";
import {GiKnifeFork} from "react-icons/gi"
import {useSelector} from "react-redux";
import MyCardComments from "./MyCardComments";


//TODO da usare Is_open per le variabili
export default function MyCard({ristorante}) {
    const ristoranti = useSelector(state => state.ristoranti)
    //todo capire dove sono i commenti+ accoppiare commento a ristorante per metterli dentro la card
    const commenti = useSelector(state => state.commenti)
    console.log(commenti)

    const [modalShow, setModalShow] = React.useState(false); //popup


    function DollarToEuros(string) {

        return (string.replaceAll("$", "€"));
    }


    return (
        <Card className={'my-3'}>
            <Row>
                <Col className="Colimg"{{/*TODO: checkare bene*/}} {/*className="col-4 p-0 "*/}>
                    <Card.Img id="img" src={ristorante.photos[0]}/>
                </Col>
                <Col className="col-8 ">
                    <Card.Body className="p-0">

                        <Link to={{pathname: `/restaurant/${ristorante.location_id}/`, state: {ristorante}}}
                              style={{textDecoration: "inherit"}}>
                            <div style={{color: "black"}}>
                                <span style={{fontWeight: "bold"}}><h4>{ristorante.name}</h4></span>
                            </div>
                        </Link>
                        {/*                 <Link to={{pathname: `/restaurant/${ristorante.location_id}/`, state: {ristorante}}}><Card.Title
                                    className="text-start">{ristorante.name}</Card.Title></Link>*/}
                        <Card.Text className="d-flex mb-0">
                            <MyRating score={ristorante.rating}/>
                            <span style={{color: "grey"}}>{ristorante.num_reviews} recensioni
                                    <span>&nbsp; | &nbsp;</span>
                                    </span>
                            <span className="d-flex ms-1 text-danger">Oggi chiuso</span>
                        </Card.Text>
                        {/*                                <Card.Text className="d-flex mb-0">
                                    <MyRating score={ristorante.rating}/>
                                    <a className="d-flex mx-1">{ristorante.num_reviews}</a>
                                    <span className="d-flex ms-1">|</span>
                                    <span className="d-flex ms-1 text-danger">Oggi chiuso</span>
                                </Card.Text>*/}
                        <Card.Text className="d-flex"> {/*TODO mettere il color grey qui con bootstrap*/}
                            <span style={{color: "grey"}}>
                                    <span>{ristorante.category.localized_name}</span>
                                    <span className="ms-1">&nbsp; | &nbsp;</span>
                                    <span className="ms-1"
                                          id={'fascia_di_prezzo'}>{DollarToEuros(ristorante.price_level)}</span>
                                    <span className="ms-1">&nbsp; | &nbsp;</span>
                                    <span className="ms-1">&nbsp;<GiKnifeFork/> &nbsp;Menù</span>
                                    </span>
                        </Card.Text>
                        <Card.Footer
                            style={{backgroundColor: "white"}}>{/*TODO mettere il background white con bootstrap*/}
                            <MyCardComments ristorante={ristorante}/>
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
    )
}
