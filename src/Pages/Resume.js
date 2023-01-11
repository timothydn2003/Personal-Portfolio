import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from 'react-router-bootstrap'
import '../App.css'
import { Document, Page } from 'react-pdf';
import { useState } from 'react';
import resume from '../Images/resume.png'
const Resume = () => {
    
    return(
        <div className="resume-page">
            <div className="resume-nav">
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
                            <LinkContainer to = '/'>
                            <Nav.Link>home</Nav.Link>
                            </LinkContainer>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <Container >
              <div className='resume-main'>
                <img src={resume}/>
              </div>
            </Container>

        </div>
    )
}
export default Resume