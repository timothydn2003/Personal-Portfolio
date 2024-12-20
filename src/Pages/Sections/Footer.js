import React from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { useState, useContext } from 'react'
import { TextField } from '@mui/material';
import '../../App.css'
import { AppContext } from '../Home'
import { Col, Container, Nav, Row } from 'react-bootstrap';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4
  };

const Footer = (props) => {
  const{setUsername, setPassword, incorrectLogin} = useContext(AppContext)

  const [open, setOpen] = useState(false);


  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const stop = (event) => {
    event.preventDefault()
  }
return (
  <div className='footer'>
    <Container>
      <Row>
        <Col md = '3' xs = '6'>
          <footer><button className='footer-btn' onClick={handleOpen}>@Timothy Doan 2025</button></footer>
        </Col>
        <Col md = '9' xs = '6'>
          <a href='https://www.linkedin.com/in/timothy-doan-4703b3213/' target={"_blank"}><LinkedInIcon style={{ color: "black", fontSize: 35,  marginRight: '20px'}}/></a>
          <a href='https://github.com/timothydn2003' target={"_blank"}><GitHubIcon style={{fontSize: 35, color: "black", marginRight: '20px'}}/></a>
          <a href='#landing-page'><ArrowCircleUpIcon style={{fontSize: 35, color: "black"}}/></a> 
        </Col>
      </Row>
      <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box sx={{ ...style, width: 300 }}>
          <form className='login-form' onSubmit={stop}>
              <Row className='username-input'>
                <Col>
                  <TextField id="filled-basic" label="Username" variant="filled" onChange={(e) => setUsername(e.target.value)} required/>
                </Col>
              </Row>
              <Row className='password-input'>
                <Col>
                <TextField id="filled-basic" label="Password" variant="filled" onChange={(e) => setPassword(e.target.value)} required/>
                </Col>
              </Row>
              {incorrectLogin?"":<h6 className='error-message'>*Username or Password Incorrect*</h6>}
              <Button type='submit' onClick={props.log} variant="outlined">Login</Button>
          </form>
      </Box>
    </Modal>
  </Container>
  </div>
)
}

export default Footer