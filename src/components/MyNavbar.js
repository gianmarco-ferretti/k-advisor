import React from 'react'
import {Navbar, Form, Button, Container, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import {login} from "../actions";
import { addSearch } from '../actions'
import { removeAllSearch } from '../actions'


export default function MyNavbar() {

    const dispatch = useDispatch();
    const logged = useSelector(state => state.logged)


    /*TODO farlo con un handleChange*/
    const setKeyword = (e) => {
        dispatch(addSearch(e.target.value))
    }
    const resetKeyword = (e) => {
        dispatch(removeAllSearch(e.target.value))
    }



    return (
        <Container fluid={'p-0'} id='NavContainer'>
            <Navbar bg="light" epand="true">
                <Col>
                    <Link to="/" style={{textDecoration: "inherit"}}>
                        <div className={'text-body'}>
                            <span>Kromin</span>
                            <span style={{fontWeight: "bold"}}>Advisor</span>
                        </div>
                    </Link>
                </Col>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Col>
                    <Form inline>
                        <input  type="text" id="searchbar" placeholder="Search" className="NavSearch" size='sm' onChange={setKeyword} onClick= {resetKeyword}/>
                    </Form>
                </Col>
                {/*TODO riunire i due ternari in uno solo*/}
                <Col>
                    {(logged) ?
                        <span>
                            <Link to={{pathname: `/preferiti/`}}><span className="px-2">Preferiti</span></Link>
                            <Link to={{pathname: `/prenotazioni/`}}>Prenotazioni</Link>
                        </span>
                        : null
                    }
                </Col>
                <Col>
                    {(logged) ?
                        <Button size='sm' className="btn btn-danger"
                                /*simulo un logout facendogli ricaricare il dom*/
                                onClick={() => {dispatch(login()); window.location.href='/'}}>Logout</Button>
                        :
                        <Button variant='dark' size='sm' className='NavEnterBtn'
                                onClick={() => dispatch(login())}>Entra</Button>}
                </Col>
            </Navbar>
        </Container>
        /*        <Navbar bg="light" expand="lg" className="border-bottom border-dark">
                    <Container >
                        <Navbar.Brand><Link to="/" style={{textDecoration: "inherit"}}>
                            <div className={'text-body'}>
                                <span>Kromin</span>
                                <span style={{fontWeight: "bold"}}>Advisor</span>
                            </div>
                        </Link></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">


                                <div className="input-group">
                                    <span className="input-group-prepend">
                                        <div
                                            className="input-group-text bg-white border-secondary border-right-0 text-body"><AiOutlineSearch/></div>
                                    </span>
                                    <span className="input-group-append">

                                  <input className="border-secondary border-left-0 border-dark" type="text" id="searchbar"/>
                                    </span>
                                </div>


                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#link">Link</Nav.Link>
                                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider/>
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>*/
    )
}       
    