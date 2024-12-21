import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from 'react-router-bootstrap'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg"className='navbar-home'>
      <Container>
        <LinkContainer to= '/'><Navbar.Brand><h2>Timothy Doan</h2></Navbar.Brand></LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Nav.Link href="#about-page">about</Nav.Link>
            <Nav.Link eventKey={2} href="#projects-page">
              projects
            </Nav.Link>
            <Nav.Link eventKey={2} href="#contact-page">
              contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  )
}

export default Navigation