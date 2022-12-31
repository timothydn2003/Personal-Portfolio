import { TextField } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import Navigation2 from './Sections/Nav2'
import '../App.css'
import { Col, Row } from 'react-bootstrap'
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import Button from '@mui/material/Button';

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
              <TextField id="outlined-basic" label="Title" variant="outlined" required/>
            </Col>
            <Col>
              <TextField id="outlined-basic" label="Description" variant="outlined" required/>
            </Col>
          </Row>
          <br></br>
          <Row>
            <Col>
              <TextField id="outlined-basic" label="Languages" variant="outlined" required/>
            </Col>
            <Col>
              <TextField id="outlined-basic" label="Website Link" variant="outlined"/>
            </Col>
          </Row>
          <br></br>
          <Row>
            <Col>
              <TextField id="outlined-basic" label="GitHub Link" variant="outlined" required/>
            </Col>
            <Col>
              <TextField id="outlined-basic" label="Image" variant="outlined" required/>
            </Col>
          </Row>
          <br></br>
          <Row>
            <Col>
              <Button variant='outlined' type='submit'>Add Project<AddCircleOutlinedIcon/></Button>
            </Col>
          </Row>
        </div>
      </form>
    </div>    
    </div>
  )
}

export default Login