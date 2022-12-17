import React from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { useState, useContext } from 'react'
import { TextField } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import '../../App.css'
import { AppContext } from '../Home'
import { Col, Row } from 'react-bootstrap';

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
  const{setUsername, setPassword} = useContext(AppContext)

  const [open, setOpen] = useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
      event.preventDefault();
  };
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
  <div>
  <button onClick={handleOpen}>Login</button>
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
              <TextField id="filled-basic" label="Username" variant="filled" onChange={(e) => setUsername(e.target.value)}/>
            </Col>
          </Row>
          <Row className='password-input'>
            <Col>
            <FormControl sx={{ width: '23ch' }} variant="filled">
              <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
              <FilledInput
              onChange={(e) => setPassword(e.target.value)}
              id="filled-adornment-password"
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                  <InputAdornment position="end">
                  <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                  >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                  </InputAdornment>
              }
              />
            </FormControl>
            </Col>
          </Row>
          <Button onClick={props.log} variant="outlined">Login</Button>
      </form>
  </Box>
</Modal>
  </div>
)
}

export default Footer