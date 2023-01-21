import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../../App.css'
import { useState, useEffect } from 'react'
import { db } from '../../firebase-config'
import { collection, getDocs } from 'firebase/firestore'
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import AOS from "aos";
import "aos/dist/aos.css";

function Projects() {
  const[projects,setProjects] = useState([])
  const projectsCollectionRef = collection(db, "Projects")
  useEffect(() => {
    const getProjects = async () => {
      const data = await getDocs(projectsCollectionRef)
      setProjects(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    }
    getProjects()

    AOS.init();
    AOS.refresh();
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
             <div data-aos="fade-up">
              <Row>
                <Col md = "6" xs = "12" style={{ justifyContent: 'right' }}>
                  <img className='project-image' src={data.imageLink}/>
                </Col>
                <Col md = "6" xs = "12">
                 <div className='project-box'>
                  <div className='project-info'>
                    <Row>
                        <Col className='buttons'>
                          {data.link!== "" || data.videoLink !== ""?<a href= {data.link != null? data.link: data.videLink} target = "_blank"><button className='button-icon' style={{ color: "black", fontSize: 15,  marginRight: '0px'}}><LanguageIcon/></button></a>:""}
                          <a href = {data.gitLink} target = "_blank"><button className='button-icon'><GitHubIcon style={{ color: "black", fontSize: 35}}/></button></a>
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
               
              </Row>
              </div>
            )
          })}
          </Container>
        </div>
      </Container>
      
    </div>
  )
}

export default Projects