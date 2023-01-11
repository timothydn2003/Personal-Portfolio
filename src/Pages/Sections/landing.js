import React from 'react'
import { Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import Button from '@mui/material/Button';
import '../../App.css'
import Typewriter from 'typewriter-effect'

function Landing() {
   
  return (
    <div className='landing-page'>
      <Container>
        <h1>Hello, I'm<br></br></h1>
        <Typewriter onInit={(typewriter) => {
          typewriter

          .typeString("Timothy Doan.")
          .pauseFor(2000)
          .start()
        }}
        className = 'landing-name'
        />
        <hr style={{width: '25%', color: 'black', marginLeft:'auto', marginRight:'auto',borderTop:'4px solid'}}/>
        <p>Currently a Computer Science student <br></br>at California State University, Sacramento</p>
        <LinkContainer to='/resume'>
          <button className='resume-btn'><b>Resume</b></button>
        </LinkContainer>
      </Container>
      
    </div>
  )
}

export default Landing