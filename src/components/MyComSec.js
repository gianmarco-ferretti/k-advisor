import { Card, Button, Col, Container, Row } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import axios from "axios";
import MyRating from "./MyRating";
import { BiCommentMinus } from "react-icons/bi";

export default function MyComSec({ ristorante }) {
  let [commenti, setCommenti] = useState({ commmenti: [] });

  useEffect(() => {
    axios
      .get(ristorante.reviews_endpoint)
      .then((response) => setCommenti(response.data));
  }, []);

  console.log(commenti);

  if (commenti[0] !== undefined && commenti[1] !== undefined) {
    return (
      <Container className={"mt-4"}>
        <Card>
          <Card.Header>
            <span className={"d-flex justify-content-between"}>
              <div className={"text-black font-weight-bold"}>RECENSIONI ({commenti.length})</div>
              <div>
              <Button variant="dark" size="sm">Dark</Button>{' '}
              </div>
            </span>
          </Card.Header>

          {commenti.map((commento, i) => (
            <Card.Body>
              <Row>
                <Col className={"d-flex col-3 col-lg-3"}>
                  {/* TODO fare l onclick event */}
                  <p>
                    <span>
                      <div>
                        <img id="userimage" src={commento.user_avatar}></img>
                      </div>
                      <br></br>
                      <div className={"text-center"}>{commento.user}</div>
                    </span>
                  </p>
                </Col>
                <Col className={" col-9 col-lg-9"}>
                  <p>
                    <div className={"d-flex"}>
                      <MyRating score={commento.rating} />
                      <div> Recensito ieri</div>
                    </div>
                    <span className={"text-black font-weight-bold"}>
                      <div>{commento.name.substring(3)}</div>
                      <br></br>
                    </span>
                    <span>
                      <div id={"description"}>{commento.description}</div>
                    </span>{" "}
                    <span>
                      <div>
                        <span className={"text-black font-weight-bold"}>
                          Data Della Visita:
                        </span>
                        <span> {commento.created_at}</span>
                      </div>
                    </span>
                  </p>
                </Col>
              </Row>
              <hr></hr>
            </Card.Body>
           
          ))}
        </Card>
      </Container>
    );
  } else if (commenti[0] !== undefined) {
    return (
      <span className={"text-black-50 font-weight-bold"}>
        <div>"{commenti[0].name.substring(3)} "</div>
      </span>
    );
  } else {
    return (
      <span className={"text-black-50 font-weight-bold"}>
        <div>{ristorante.address_obj.city}</div>
      </span>
    );
  }
}
