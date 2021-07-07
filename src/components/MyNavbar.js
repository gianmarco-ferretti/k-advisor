import React from 'react'
import {Navbar, Form, Button, Container, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'


import { addSearch } from '../actions'
import { useDispatch } from 'react-redux'
import { removeAllSearch } from '../actions'





export default function MyNavbar() {

    const dispatch = useDispatch();
    //when the value is deleted launch removeallsearch
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
                        <input  type="text" id="searchbar" placeholder="Search" className="NavSearch" size='sm' onChange={setKeyword} onClick= {resetKeyword}/>
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
    
