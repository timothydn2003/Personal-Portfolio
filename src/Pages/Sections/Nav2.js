import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {LinkContainer} from 'react-router-bootstrap'

const Navigation2 = (props) => {
  return (
    <Navbar collapseOnSelect expand="lg" className='navbar-home'>
      <Container>
        <LinkContainer to= '/'>
            <Navbar.Brand><h2>Timothy Doan</h2></Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <LinkContainer to = '/addProject'>
              <Nav.Link>add projects</Nav.Link>
            </LinkContainer>
            <button className='logout-btn' onClick={props.logout}><Nav.Link href="/">logout</Nav.Link></button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation2