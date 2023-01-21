import { useState,useEffect } from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
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
                            <form className="contact-form" action="https://formsubmit.co/timothy_doan@yahoo.com" method="POST">
                                <TextField style={{ width: '50%', marginBottom: '10px', marginTop: '1vh', backgroundColor: "#E8ECF0" }} size="small" id="outlined-basic" label="Name" name = "name" variant="outlined" type="ema" onChange={(e) => setName(e.target.value)} required/><br></br>
                                <TextField style={{ width: '50%', marginBottom: '10px', backgroundColor: "#E8ECF0" }} size="small" id="outlined-basic" label="Email" variant="outlined" name="email" type= "email" onChange={(e) => setEmail(e.target.value)} required/><br></br>
                                <TextField style={{ width: '50%', marginBottom: '10px', backgroundColor: "#E8ECF0" }} size="small" id="outlined-basic" label="Subject" variant="outlined" name="subject" onChange={(e) => setSubject(e.target.value)} required/><br></br>
                                <TextField style={{ width: '50%', marginBottom: '40px', backgroundColor: "#E8ECF0" }} id="outlined-basic" label="Subject" variant="outlined" name="message" multiline rows={8}maxRows={12} onChange={(e) => setSubject(e.target.value)} required/><br></br>
                                <input type="hidden" name="_next" value="http://localhost:3000/thankyou"></input>
                                <button type="submit" className="email-btn">Submit</button>
                            </form>
                        </div>
                    </Row>
                </div>
            </Container>
       </div>
    )
}
export default Contact