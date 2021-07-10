import React from "react";
import {Card, Container, Col} from "react-bootstrap";
import {GiKnifeFork} from "react-icons/gi"


export default function MyMenu({ristorante}) {

    return (
        <Container className={"mt-4"}>
            {
                (ristorante.menu === undefined) ?
                    <Card.Header>
                    <span className="text-left">{" "}<h4>Questo Ristorante non ha caricato il menù</h4></span>
                    </Card.Header>
                    :
                    <Card>
                        <Card.Header>
                               <span className="text-left">{" "}<h4>Menu</h4></span>
                        </Card.Header>
                        <Card.Body id="cardbody" className='row'>
               
                        </Card.Body>
                        <Card.Footer>
                            <p className="text-left"><a> <GiKnifeFork/> Mostra il menù completo</a></p>
                        </Card.Footer>
                    </Card>
            }
        </Container>
    );
}
