import React from 'react'
import {Navbar, Form, Button, Container, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'


export default function MyNavbar() {
    return (
        <Container fluid={'p-0'} id='NavContainer'>
            <Navbar bg="light" epand="true">
                <Col>
                    <Link to="/">
                        <div className={'text-body'}>
                            <span>Kromin</span>
                            <span style={{fontWeight: "bold"}}>Advisor</span>
                        </div>
                    </Link>
                </Col>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Col>
                    <Form inline>
                        <input type="text" id="searchbar" placeholder="Search" className="NavSearch" size='sm'/>
                    </Form>
                </Col>
                <Col>
                </Col>
                <Col>
                    <Button variant='dark' size='sm' className='NavEnterBtn'>Entra</Button>
                </Col>
            </Navbar>
        </Container>
    )
}       
    