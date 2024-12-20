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
        <Typewriter options={{
          strings:['Timothy Doan.'],
          autoStart:true,
          loop:true,
          pauseFor: 2500,
          deleteSpeed: 100,
                }}
        className = 'landing-name'
        />
        <hr style={{width: '25%', color: 'black', marginLeft:'auto', marginRight:'auto',borderTop:'4px solid'}}/>
        <p>Currently a Software Engineer at<br></br> Hewlett Packard Enterprise - Aruba Networking</p>
          <button className='resume-btn'><b><a className="a-resume-btn" target="_blank" href='https://drive.google.com/file/d/1d3v5e_I6tfJ4gX7s7udMamzfT8Fs83_R/view?usp=sharing'>Resume</a></b></button>
      </Container>
      
    </div>
  )
}

export default Landing