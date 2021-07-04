import React, {useEffect, useState} from 'react';
import {Row, Card, Button, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import MyModalPrenota from "./MyModalPrenota";
import MyRating from "./MyRating";
import {useDispatch, useSelector} from "react-redux";
import {fetchCommenti} from "../actions";
import axios from "axios";
import MyCardComments from "./MyCardComments";


export default function MyCard({ristorante}) {
    const [modalShow, setModalShow] = React.useState(false); //popup

    /*  let [commenti, setCommenti] = useState({commmenti: []});

      useEffect(() => {
          axios.get(ristorante.reviews_endpoint).then(response => setCommenti(response.data))
      }, [])

      let showComments;

      if(commenti[0] != undefined){
          showComments = commenti[0]
      console.log(showComments.name)
      }*/

    return (
        <Card className={'my-3'}>
            <Row>
                <Col className="col-4 p-0 ">
                    <Card.Img id="img" src={ristorante.photos[0]}/>
                </Col>
                <Col className="col-8 ">
                    <Card.Body className="p-0">
                        <Link to={{pathname: `/restaurant/${ristorante.location_id}/`, state: {ristorante}}}><Card.Title
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

