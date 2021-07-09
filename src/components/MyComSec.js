import { Card, Button, Col } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function MyComSec({ ristorante }) {
  let [commenti, setCommenti] = useState({ commmenti: [] });

  useEffect(() => {
    axios
      .get(ristorante.reviews_endpoint)
      .then((response) => setCommenti(response.data));
  }, []);
  if (commenti[0] !== undefined && commenti[1] !== undefined) {
    return (
      <Card>
        <Card.Title>
          <p className="d-flex">
            <h6>recensioni (900)</h6>
            <Button className="ml-auto" variant="dark">
              Dark
            </Button>{" "}
          </p>
        </Card.Title>

        <Card.Body>
          <Col className={"col-12 col-lg-3"}></Col>
          <Col>
            <p>
              <span className={"text-black-50 font-weight-bold"}>
                <div>"{commenti[0].name.substring(3)} "</div>
                <div>"{commenti[1].name.substring(3)} "</div>
              </span>
            </p>
          </Col>
        </Card.Body>
      </Card>
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
