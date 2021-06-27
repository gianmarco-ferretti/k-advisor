import React from 'react'
import { Navbar,Form,Button,Container,Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'



export default function NavBar() {
    return (
        <Container fluid id='NavContainer'>
    <Navbar bg="light" epand = "true">
    <Col>
    {/* da aggiustare lo stile della scritta */}
    <Link style={{textDecoration : 'none'}} to= "/">Kromin</Link><Link className='link' to= "/">Advisor</Link> 
    </Col>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Col >
    <Form inline >
      <input type="text" id = "searchbar" placeholder="Search" className="NavSearch" size='sm' />
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
    