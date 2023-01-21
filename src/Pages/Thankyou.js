import Navigation from './Sections/Nav'
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap'
import '../App.css'
import { LinkContainer } from 'react-router-bootstrap'
const Thankyou = () => {
    return(
        <div className='thankyou-page'>
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
            <div className='thankyou-message'>
                <Container>
                    <Row>
                        <Col>
                            <h4>Your message has been successfully sent! Thank you for your email!</h4>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
export default Thankyou