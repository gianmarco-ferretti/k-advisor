import React from 'react';
import {Container, Row, Table} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {MdDeleteForever} from "react-icons/all";
import {removeReservation} from "../actions";

function MyPrenotazioni() {
    const dispatch = useDispatch();
    const prenotazioni = useSelector(state => state.prenotazioni);

    return (
        <>
            <Container fluid className={'bg-white'} id={'Intestazione-container'}>
                <Row className={'justify-content-center  intestazione'}>
                    <h3 className={'align-self-end'}>Prenotazioni</h3>
                </Row>
            </Container>
            <Container className={'min-vh-100 mt-3'}>
                <div className={'table-responsive'}>
                    <Table striped bordered hover className={'my-tab'}>
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Ristorante</th>
                            <th>Data</th>
                            <th>Orario</th>
                            <th>Opsiti</th>
                        </tr>
                        </thead>
                        <tbody>
                        {prenotazioni.map((prenotazione, i) =>
                            <tr key={i}>
                                <td>{i + 1}
                                    <MdDeleteForever size={30} className={'text-danger ml-2 mb-1'}
                                                     onClick={() => dispatch(removeReservation(prenotazione))}/>
                                </td>
                                <td>{prenotazione.ristorante}</td>
                                <td>{prenotazione.reservationDate.getDate()}/{prenotazione.reservationDate.getMonth()}/{prenotazione.reservationDate.getFullYear()}</td>
                                <td>{prenotazione.reservationTime}</td>
                                <td>{prenotazione.reservationGuests}</td>
                            </tr>
                        )}
                        </tbody>
                    </Table>
                </div>
            </Container>
        </>
    );
}

export default MyPrenotazioni;
