import React from 'react'
import {Navbar, Form, Button, Container, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import  {useState} from 'react'
import { useSelector } from 'react-redux'
import { addSearch } from '../actions'
import { useDispatch } from 'react-redux'





export default function MyNavbar() {

    const dispatch = useDispatch();

    const setKeyword = (e) => {
        dispatch(addSearch(e.target.value))
    }

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
                        <input  type="text" id="searchbar" placeholder="Search" className="NavSearch" size='sm' onChange={setKeyword}/>
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
    
