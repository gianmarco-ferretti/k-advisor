import React from "react";
import { Card, Container,Col } from "react-bootstrap";
import {GiKnifeFork} from "react-icons/gi"
import { useSelector } from "react-redux";

export default function MyMenu({ index }) {
  const ristoranti = useSelector((state) => state.ristoranti);

  console.log(ristoranti[index].menu);

  if (ristoranti[index].menu == undefined) {
    return <div></div>;
  } else console.log(ristoranti[index].menu);
  return (
    <Container className={"mt-4"}>
      <Card>
        <Card.Header>
          <p className="text-left">
            {" "}
            <h4>Menu</h4>
          </p>
        </Card.Header>  
        <Card.Body id="cardbody" className='row'>
          {ristoranti[index].menu.map((k, i) => (
            <Container id="menuboxtext" className='row' >   
              <div className="menudescription">
              <Col className='col-sm'>
                <p className="text-left">
                  <a>{ristoranti[index].menu[i].description}</a>
                </p>
                </Col>
                <Col className='col-sm'>
                <div className="menuprice">
                  <p className="text-left">
                    <a>{ristoranti[index].menu[i].price} €</a>
                  </p>
                </div>
                </Col>
              </div>
            </Container>
          ))}
        </Card.Body>
        <Card.Footer>
          <p  className="text-left"><a> <GiKnifeFork />  Mostra il menù completo</a> </p>
        </Card.Footer>
      </Card>
    </Container>
  );
}
