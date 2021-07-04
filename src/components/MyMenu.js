import React from "react";
import {Card, Container, Col} from "react-bootstrap";
import {GiKnifeFork} from "react-icons/gi"


export default function MyMenu({ristorante}) {

    //todo formattazione grafica del menu + sezione commenti

    if (ristorante.menu === undefined) {
        return <div></div>; //TODO VALERIO! puoi anche non fargli ritoranre nulla scrivendo solo return, o return null. Brutto mettere i div vuoti, provalo
    } else console.log(ristorante.menu);
    return (
        <Container className={"mt-4"}>
            <Card>
                <Card.Header>
          <span className="text-left">
            {" "}
              <h4>Menu</h4>
          </span>
                </Card.Header>
                <Card.Body id="cardbody" className='row'>
                    {ristorante.menu.map((k, i) => (
                        <Container id="menuboxtext" className='row' key={k}>
                            <div className="menudescription">
                                <Col className='col-sm'>
                                    <p className="text-left">
                                        <a>{ristorante.menu[i].description}</a>
                                    </p>
                                </Col>
                                <Col className='col-sm'>
                                    <div className="menuprice">
                                        <p className="text-left">
                                            <a>{ristorante.menu[i].price} €</a>
                                        </p>
                                    </div>
                                </Col>
                            </div>
                        </Container>
                    ))}
                </Card.Body>
                <Card.Footer>
                    <p className="text-left"><a> <GiKnifeFork/> Mostra il menù completo</a></p>
                </Card.Footer>
            </Card>
        </Container>
    );
}
