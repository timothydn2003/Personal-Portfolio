import { TextField } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import Navigation2 from './Sections/Nav2'
import '../App.css'
import { Col, Row } from 'react-bootstrap'

const Login = () => {
  const stop = (event) => {
    event.preventDefault()
  }
  return (
    <div>
      <Navigation2/>
    <div className='project-form'>
      <form onSubmit={stop}>
        <h1>Add a New Project</h1>
        <div className='login-form-inputs'>
          <Row>
            <Col>
              <TextField id="standard-basic" label="Title" variant="outlined" required/>
            </Col>
            <Col>
              <TextField id="standard-basic" label="Description" variant="outlined" required/>
            </Col>
          </Row>
          <Row>
            <Col>
              <TextField id="standard-basic" label="Languages" variant="outlined" required/>
            </Col>
            <Col>
              <TextField id="standard-basic" label="Website Link" variant="outlined"/>
            </Col>
          </Row>
          <Row>
            <Col>
              <TextField id="standard-basic" label="GitHub Link" variant="outlined" required/>
            </Col>
            <Col>
              <TextField id="standard-basic" label="Image" variant="outlined"/>
            </Col>
          </Row>
        </div>
      </form>
    </div>    
    </div>
  )
}

export default Login