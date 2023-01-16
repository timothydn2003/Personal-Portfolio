import { TextField } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import Navigation2 from './Sections/Nav2'
import '../App.css'
import { Col, Row } from 'react-bootstrap'
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import Button from '@mui/material/Button';
import { db } from '../firebase-config'
import { collection, addDoc } from 'firebase/firestore'
import { storage } from '../firebase-config'
import { ref, uploadBytes } from 'firebase/storage'
import { v4 } from 'uuid'

const Login = () => {
  const projectsCollectionRef = collection(db, "Projects")

  const[name,setName] = useState('')
  const[description,setDescription] = useState('')
  const[languages,setLanguages] = useState('')
  const[gitLink,setGitLink] = useState('')
  const[link,setLink] = useState('')
  const[image,setImage] = useState(null)
  const[imageLink, setImageLink] = useState('')
  const[videoLink, setVideoLink] = useState('')

  const addProject = async () => {
    
    await addDoc(projectsCollectionRef, {name: name, description: description, languages: languages, gitLink: gitLink, link: link, videoLink: videoLink, imageLink : imageLink})
   
  }

  const addImage = () => {
    if(image === null) return;
    const imageRef = ref(storage, `images/${image.name + v4()}`)
    uploadBytes(imageRef, image).then(() => {
      alert("Project Uploaded")
    })
  }
  const stop = (event) => {
    event.preventDefault()
    
  }
  return (
    <div className='add-page'>
      <Navigation2/>
      <div className='project-form'>
        <form onSubmit={stop}>
          <h1>Add a New Project</h1>
          <div className='login-form-inputs'>
            <Row>
              <Col>
                <TextField id="outlined-basic" label="Title" variant="outlined" onChange={(e) => setName(e.target.value)} required/>
              </Col>
              <Col>
                <TextField id="outlined-basic" label="Description" variant="outlined" onChange={(e) => setDescription(e.target.value)} required/>
              </Col>
            </Row>
            <br></br>
            <Row>
              <Col>
                <TextField id="outlined-basic" label="Languages" variant="outlined" onChange={(e) => setLanguages(e.target.value)} required/>
              </Col>
              <Col>
                <TextField id="outlined-basic" label="Website Link" variant="outlined" onChange={(e) => setLink(e.target.value)}/>
              </Col>
            </Row>
            <br></br>
            <Row>
              <Col md ="6">
                <TextField id="outlined-basic" label="GitHub Link" variant="outlined" onChange={(e) => setGitLink(e.target.value)} required/>
              </Col>
              <Col md="6">
              <TextField id="outlined-basic" label="Image Link" variant="outlined" onChange={(e) => setImageLink(e.target.value)} required/>
              </Col>
            </Row>
            <br></br>
            <Row>
            <Col>
                <TextField id="outlined-basic" label="Video Link" variant="outlined" onChange={(e) => setVideoLink(e.target.value)}/>
              </Col>
              <Col>
                <Button onClick={addProject} variant='outlined' type='submit'>Add Project<AddCircleOutlinedIcon/></Button>
              </Col>
            </Row>
          </div>
        </form>
        </div>    
        <div className='image-form'>
          <form onSubmit={stop}>
            <div className='project-form'>
              <Row>
                <Col>
                  <input type={"file"} onChange = {(e)=> setImage(e.target.files[0])} required/>
                </Col>
                <Col>
                  <Button onClick={addImage} variant='outlined' type='submit'>Add Image<AddCircleOutlinedIcon/></Button>
                </Col>
              </Row>
            </div>
          </form>
        </div>
      </div>
  )
}

export default Login