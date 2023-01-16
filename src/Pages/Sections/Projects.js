import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../../App.css'
import { useState, useEffect } from 'react'
import { db } from '../../firebase-config'
import { collection, getDocs } from 'firebase/firestore'
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';

function Projects() {
  const[projects,setProjects] = useState([])
  const projectsCollectionRef = collection(db, "Projects")
  useEffect(() => {
    const getProjects = async () => {
      const data = await getDocs(projectsCollectionRef)
      setProjects(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    }
    getProjects()
  },[])
  return (
    <div className='projects-section'>
      <Container>
        <Row>
          <h2>my projects</h2>
        </Row>
        <div className='projects-row'>
        <Container>
          {projects.map((data) => {
            return(
              <Row>
                <Col md = "6" xs = "12">
                 <div className='project-box'>
                  <div className='project-info'>
                    <Row>
                        <Col className='buttons'>
                          <a href= {data.link != null? data.link: data.videLink} target = "_blank"><button className='button-icon'><LanguageIcon/></button></a>
                          <a href = {data.gitLink} target = "_blank"><button className='button-icon'><GitHubIcon/></button></a>
                        </Col>
                    </Row>
                    <Row>
                      <Col>
                        <h3 className='project-name'><b>{data.name}</b></h3>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <p className='project-description'>{data.description}</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <p className='project-languages'>{data.languages}</p>
                      </Col>
                    </Row>
                  </div>
                 </div>
                </Col>
                <Col md = "6" xs = "12">
                  <img className='project-image' src={data.imageLink}/>
                </Col>
              </Row>
            )
          })}
          </Container>
        </div>
      </Container>
      
    </div>
  )
}

export default Projects