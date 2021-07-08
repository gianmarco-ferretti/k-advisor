import React from 'react';
import {Container, Row, Table} from "react-bootstrap";

/*TODO Gianmarco, mettere bordo etc etc*/

function MyPrenotazioni() {
    return (
        <>
            <Container fluid className={'bg-white'} id={'Intestazione-container'}>
                <Row className={'justify-content-center  intestazione'}>
                    <h3 className={'align-self-end'}>Prenotazioni</h3>
                </Row>
            </Container>
            <Container className={'min-vh-100 mt-3'}>
                <Table striped bordered hover variant={'dark'}>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td colSpan="2">Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                    </tbody>
                </Table>
            </Container>
        </>
    );
}

export default MyPrenotazioni;