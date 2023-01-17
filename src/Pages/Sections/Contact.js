import { useState,useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"
import AOS from "aos";
import "aos/dist/aos.css";
import { TextField } from '@mui/material'
import '../../App.css'

const Contact = () => {
    const[name,setName] = useState('')
    const[email,setEmail] = useState('')
    const[subject,setSubject] = useState('')
    const[message,setMessage] = useState('')

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    })
    return(
       <div className="contact-section">
            <Container>
                
                    <Row>
                        <Col>
                            <h2>contact</h2>
                        </Col>
                    </Row>
                    <div className="contact-info">
                    <Row>
                        <Col>
                            <p className="contact-message">Feel free to send me a message if you have any questions!</p>
                        </Col>
                    </Row>
                    <Row>
                        <div className="contact-email" data-aos="fade-up">
                            <form className="contact-form">
                                <TextField style={{width: '50%', marginBottom: '10px'}} size="small" id="outlined-basic" label="Name" variant="outlined" type="text" onChange={(e) => setName(e.target.value)} required/><br></br>
                                <TextField style={{width: '50%', marginBottom: '10px'}} size="small" id="outlined-basic" label="Email" variant="outlined" onChange={(e) => setEmail(e.target.value)} required/><br></br>
                                <TextField style={{width: '50%', marginBottom: '10px'}} size="small" id="outlined-basic" label="Subject" variant="outlined" onChange={(e) => setSubject(e.target.value)} required/><br></br>
                                <TextField style={{width: '50%', marginBottom: '40px'}} id="outlined-basic" label="Subject" variant="outlined" multiline rows={8}maxRows={12} onChange={(e) => setSubject(e.target.value)} required/><br></br>
                            </form>
                        </div>
                    </Row>
                </div>
            </Container>
       </div>
    )
}
export default Contact