import React from 'react'
import { Container, Row } from 'react-bootstrap'
import '../../App.css'
import { useState, useEffect } from 'react'
import { db } from '../../firebase-config'
import { collection, getDocs } from 'firebase/firestore'
function Projects() {
  const[projects,setProjects] = useState([])
  const usersCollectionRef = collection(db, "Projects")
  useEffect(() => {
    const getProjects = async () => {
      const data = await getDocs(usersCollectionRef)
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
          {projects.map((data) => {
            return(
              <h1>{data.name}</h1>
            )
          })}
        </div>
      </Container>
      
    </div>
  )
}

export default Projects