import React from 'react';
import {Row, Card, Button, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import MyModalPrenota from "./MyModalPrenota";
import MyRating from "./MyRating";
import {GiKnifeFork} from "react-icons/gi"
import MyCardComments from "./MyCardComments";
import MyPreferiti from "./MyPreferitiIcon";


export default function MyCard({ristorante}) {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <Card className={'my-3 overflow-hidden'}>
            <Row>
                <Col xs={12} lg={4} className="p-0">
                    <Card.Img id="img" src={ristorante.photos[0]}/>
                </Col>
                <Col xs={12} lg={8}>
                    <Card.Body className="p-2">
                        <MyPreferiti ristorante={ristorante}/>
                        <Link to={{pathname: `/restaurant/${ristorante.location_id}/`, state: {ristorante}}}>
                            <Card.Title
                                className="text-start text-body"><h4><strong>{ristorante.name}</strong></h4>
                            </Card.Title></Link>
                        <Card.Text className="d-flex mb-0">
                            <MyRating score={ristorante.rating}/>
                            <span
                                className={'text-black-50 font-weight-bold'}>{ristorante.num_reviews} recensioni
                            <span className={'separator font-weight-bolder'}>|</span>
                            </span>
                            {(ristorante.is_open) ?
                                <span className="d-flex ms-1 text-black-50 font-weight-bold">Aperto Ora</span>
                                :
                                <span className="d-flex ms-1 text-danger font-weight-bold">Oggi Chiuso</span>}
                        </Card.Text>
                        <Card.Text className="d-flex text-black-50 font-weight-bold">
                            <span>{ristorante.category.localized_name}</span>
                            <span className={'separator font-weight-bolder'}>|</span>
                            <span className="ms-1"
                                  id={'fascia_di_prezzo'}>{ristorante.price_level.replaceAll("$", "€")}</span>
                            <span className={'separator font-weight-bolder'}>|</span>
                            <span className="separator text-body"><GiKnifeFork/></span>
                            <span>Menù</span>
                        </Card.Text>
                        <MyCardComments ristorante={ristorante}/>
                        <Card.Footer className={'bg-white'}>
                            {(ristorante.can_book) ?
                                <Button variant="warning" className="rounded-pill font-weight-bold btn-prenota"
                                        onClick={() => setModalShow(true)}>Prenota</Button>
                                :
                                <Button variant="warning"
                                        className="rounded-pill font-weight-bold btn-prenota disabled">Prenota</Button>}
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
