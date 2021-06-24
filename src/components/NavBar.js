import React from 'react'
import { Navbar,Form,FormControl,Button,Container,Col,InputGroup } from 'react-bootstrap'


export default function NavBar() {
    return (
        <Container fluid id='NavContainer'>
    <Navbar bg="light" epand = "true">
    <Col>
    <Navbar.Brand href="#home"><a>Kromin</a><a id = 'Advisor'>Advisor</a></Navbar.Brand>
    </Col>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Col >
    <Form inline>
      <FormControl type="text" placeholder="Search" className="NavSearch" size='sm' />
    </Form>
    </Col>
    <Col>
    </Col>   
    <Col>
    <Button variant='dark'size ='sm' className='NavEnterBtn'>Entra</Button>
    </Col> 
    

   
  
</Navbar>
        </Container>
    )
}
