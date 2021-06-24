import React from 'react'
import { Row, Card, Button, Col } from 'react-bootstrap'

export default function card() {
    return (
            <Card>
                <Row>
                    <Col className="col-4">
                        <Card.Img id="img" src="https://s3-alpha-sig.figma.com/img/e6fe/d0a6/b5e1065dae506702ff89b0b602c1ca9d?Expires=1625443200&Signature=cyKakjPpgAmiH7EzxSqpFm4IQlE~SSFV8uCjICXs5slBNrX~XnXAuaoBZdPXT1SPe5X4FTeDvQ0MUCJlUKWkeVBru9NUxP0Kcoxfy9TL~uN2lExRp~VhIWPvaJ0tebfv5DJPpuot08ncvPbZpbbODWQs8ChRS0W1OsEP1i0FJ-C-LuNB3sBaJP7S84VpRKk00OPQzHzz67u3Ze2nd~OdvrWAAquPAIZT1Eih6wQn3yV7Hh3AkZACOVz19qAGCcEAk-9oPzY2Feo-x9xsHHKDKyWz4tL0LrA-CgfMYSMXaZn6EumxpUDojhbmhHy9EGG-uLWoAftFpjaeIte0g5rY3A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
                    </Col>
                    <Col>
                        <Card.Body className="col-8">
                            <Card.Title>A tutta pizza Frosinone</Card.Title>
                            <Card.Text>
                                <div id="bubble"></div>
                                191 recensioni
                            </Card.Text>
                            <Card.Footer>
                                "Pizza top"
                            </Card.Footer>
                            <Button variant="warning">Prenota</Button>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
    )
}
