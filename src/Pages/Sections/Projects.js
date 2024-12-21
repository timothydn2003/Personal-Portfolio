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
      const tmpArr = (data.docs.map((doc) => ({...doc.data(), id: doc.id})))

      tmpArr.sort((a, b) => {
        const bDate = new Date(b.date);
        const aDate = new Date(a.date);
        return bDate - aDate;
      });

      setProjects(tmpArr)
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
          {projects.map((data, index) => {
            if (index % 2 === 0) {
              return (
                <Row key={index} data-aos="fade-up" className="project-row">
                  <Col md= "6" xs= "12" className="project-card">
                    <div className="project-content">
                      <img className="project-image" src={data.imageLink} alt={`Project ${index}`} />
                      <div className="project-header">
                        <h3 className="project-name"><b>{data.name}</b></h3>
                        <div className="project-buttons">
                          {data.link || data.videoLink ? (
                            <a href={data.link || data.videoLink} target="_blank" rel="noopener noreferrer">
                              <button className="button-icon">
                                <LanguageIcon style={{ color: "black", marginLeft: "10px" }} />
                              </button>
                            </a>
                          ) : null}
                          {data.gitLink && (
                            <a href={data.gitLink} target="_blank" rel="noopener noreferrer">
                              <button className="button-icon">
                                <GitHubIcon style={{ color: "black" }} />
                              </button>
                            </a>
                          )}
                          </div>
                      </div>
                      <p className="project-description">{data.description}</p>
                      <p className="project-languages">{data.languages}</p>
                    </div>
                  </Col>
                  {projects[index + 1] && (
                    <Col md= "6" xs= "12" className="project-card">
                      <div className="project-content">
                        <img className="project-image" src={projects[index + 1].imageLink} alt={`Project ${index + 1}`} />
                        <div className="project-header">
                          <h3 className="project-name"><b>{projects[index + 1].name}</b></h3>
                          <div className="project-buttons">
                            {projects[index + 1].link || projects[index + 1].videoLink ? (
                              <a href={projects[index + 1].link || projects[index + 1].videoLink} target="_blank" rel="noopener noreferrer">
                                <button className="button-icon">
                                  <LanguageIcon style={{ color: "black", marginLeft: "10px" }} />
                                </button>
                              </a>
                            ) : null}
                            {projects[index + 1].gitLink && (
                              <a href={projects[index + 1].gitLink} target="_blank" rel="noopener noreferrer">
                                <button className="button-icon">
                                  <GitHubIcon style={{ color: "black" }} />
                                </button>
                              </a>
                            )}
                            </div>
                        </div>
                        <p className="project-description">{projects[index + 1].description}</p>
                        <p className="project-languages">{projects[index + 1].languages}</p>
                      </div>
                    </Col>
                  )}
                </Row>
              );
            }
            return null;
          })}
          </Container>
        </div>
      </Container>

    </div>
  )
}

export default Projects