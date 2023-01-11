import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../../App.css'
import { useState, useEffect } from 'react'
import { db } from '../../firebase-config'
import { collection, getDocs } from 'firebase/firestore'
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
                <Col>
                 <div>
                  <h1>{data.name}</h1>
                 </div>
                </Col>
                <Col>
                  <h1>{data.description}</h1>
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