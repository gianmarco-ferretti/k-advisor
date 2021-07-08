import React from 'react'
import {Navbar, Form, Button, Container, Col, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import {login} from "../actions";
import {addSearch} from '../actions'
import {removeAllSearch} from '../actions'


export default function MyNavbar() {
    const dispatch = useDispatch();
    const logged = useSelector(state => state.logged)

    const handleChange = (e) => {
        dispatch(removeAllSearch(e.target.value))
        dispatch(addSearch(e.target.value))
    }

    return (
        <Navbar collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand> <Link to="/" className={'text-decoration-none text-body mr-3'}>
                    <span>Kromin</span>
                    <span><strong>Advisor</strong></span>
                </Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Col>
                        <Nav className="me-auto mr-5">
                            <Form inline className={'mr-5'}>
                                <input type="text" id='my-searchbar' placeholder="Search" size='sm'
                                       onChange={handleChange}/>
                            </Form>
                            {(logged) ?
                                <>
                                    <Nav.Link><Link to={{pathname: `/preferiti/`}}
                                                    className={'text-body mr-3'}>Preferiti</Link></Nav.Link>
                                    <Nav.Link><Link to={{pathname: `/prenotazioni/`}}
                                                    className={'text-body mr-3'}>Prenotazioni</Link></Nav.Link>
                                </>
                                :
                                <div></div>
                            }
                        </Nav>
                    </Col>
                    <Col lg={2}>
                        <Nav className={'py-1'}>
                            {(logged) ?
                                <Button size='sm' className="btn btn-danger my-btn" onClick={() => {
                                    dispatch(login());
                                    window.location.href = '/'
                                }}>Logout</Button>
                                :
                                <Button variant='dark' size='sm' className={'btn my-btn'}
                                        onClick={() => dispatch(login())}>Entra</Button>
                            }
                        </Nav>
                    </Col>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
