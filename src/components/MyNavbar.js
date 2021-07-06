import React from 'react'
import {Navbar, Form, Button, Container, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import  {useState} from 'react'
import {createStore} from 'redux'

let store = createStore() // non ha un reducer, porcaccio


export default function MyNavbar() {
    const [keyword,setKeyword] = useState()
    store.subscribe(() =>console.log(store.getState()));
    return (
        <Container fluid={'p-0'} id='NavContainer'>
            <Navbar bg="light" epand="true">
                <Col>
                    <Link to="/" style ={{textDecoration:"inherit"}}>
                        <div className={'text-body'}>
                            <span>Kromin</span>
                            <span style={{fontWeight: "bold"}}>Advisor</span>
                        </div>
                    </Link>
                </Col>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Col>
                    <Form inline>
                        <input type="text" id="searchbar" placeholder="Search" className="NavSearch" size='sm' onChange={(e) => setKeyword(e.target.value)}/>
                    </Form>
                </Col>
                <Col>
                </Col>
                <Col>
                <p> il valore è {keyword}</p>
                    <Button variant='dark' size='sm' className='NavEnterBtn'>Entra</Button>
                </Col>
            </Navbar>
        </Container>
    )
}       
    
