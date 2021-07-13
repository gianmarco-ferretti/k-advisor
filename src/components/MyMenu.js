import React from "react";
import { Card, Container, Col } from "react-bootstrap";
import { GiKnifeFork } from "react-icons/gi";
import { useState } from "react";

export default function MyMenu({ ristorante }) {
  const [readMore, setReadMore] = useState(false);

  function setMoreContent() {
    if (
      ristorante.menu === undefined ||
      ristorante.menu[0] === undefined 
    ) {
      return <div></div>;
    } else {
      return (
        // qua si puo fare un map nel caso di menu piu lunghi
        <div>
          <Col className={"col-12 col-lg-8"}>
            <p>{ristorante.menu[2].description}</p>
          </Col>
          <Col className={"col-12 col-lg-4"}>
            <p>{ristorante.menu[2].price}</p>
          </Col>
        </div>
      );
    }
  }
  const extraContent = setMoreContent();
  const linkName = readMore ? (
    <p className={"text-dark"}>
      {" "}
      <h6>
        {" "}
        <GiKnifeFork /> Mostra meno
      </h6>
    </p>
  ) : (
    <p className={"text-dark"}>
      <h6>
        {" "}
        <GiKnifeFork /> Mostra il menù completo
      </h6>
    </p>
  );

  return (
    <Container className={"mt-4"}>
      {ristorante.menu === undefined ? (
        <Card.Header>
          <span className="text-left">
            {" "}
            <h4>Questo Ristorante non ha caricato il menù</h4>
          </span>
        </Card.Header>
      ) : (
        <Card>
          <Card.Header>
            <span className="text-left">
              {" "}
              <h4>Menu</h4>
            </span>
          </Card.Header>

          <Card.Body id="cardbody" className="row">
            <Col className={"col-12 col-lg-5"}>
              <p>{ristorante.menu[0].description}</p>
            </Col>
            <Col className={"col-12 col-lg-1"}>
              <p>{ristorante.menu[0].price}</p>
            </Col>
            <Col className={"col-12 col-lg-5"}>
              <p>{ristorante.menu[1].description}</p>
            </Col>
            <Col className={"col-12 col-lg-1"}>
              <p>{ristorante.menu[1].price}</p>
            </Col>
          </Card.Body>

          <Card.Footer>
            <p className="text-left">
              <a
                className="read-more-link"
                onClick={() => {
                  setReadMore(!readMore);
                }}
              >
                <h2>{linkName}</h2>
              </a>
              {readMore && extraContent}
            </p>
          </Card.Footer>
        </Card>
      )}
    </Container>
  );
}
