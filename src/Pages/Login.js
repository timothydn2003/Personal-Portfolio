import { TextField } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import Navigation2 from './Sections/Nav2'

function Login() {
  const stop = (event) => {
    event.preventDefault()
  }
  return (
    <div>
      <Navigation2/>
    <div className='login-form'>
      <form onSubmit={stop}>
      
      </form>
    </div>    
    </div>
  )
}

export default Login