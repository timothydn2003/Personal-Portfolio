import { Col, Container, Row } from "react-bootstrap"
import '../../App.css'
import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import smudLogo from "../../../src/Images/smud.jpeg"
import hpeLogo from "../../../src/Images/hpe.png"
import headshot from "../../../src/Images/hpe.jpg"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react'
import C from "../../../src/Icons/C.png"
import Python from "../../../src/Icons/python.png"
import Java from "../../../src/Icons/java.png"
import Javascript from "../../../src/Icons/javascript.png"
import ReactJS from "../../../src/Icons/react.png"
import Node from "../../../src/Icons/node.png"
import Typescript from "../../../src/Icons/typescript.png"
import PostgreSQL from "../../../src/Icons/postgresql.png"
import Linux from "../../../src/Icons/linux.png"
import Git from "../../../src/Icons/git.png"



const About = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    })
    return (
        <div className="about-section">
        <Container>
            <Row>
                <h2>about me</h2>
            </Row>
            <Row>
                <Col md = "2" xs = "12">
                    <div className="about-img" data-aos="fade-up">
                        <Row>
                            <img src={headshot} alt="headshot" className="about-headshot" />
                        </Row>
                    </div>
                </Col>
                <Col md = "5" xs = "12">
                    <div className="about-content" data-aos="fade-up">
                        <Row>
                            <h3>Timothy Doan</h3>
                            <hr style={{width: '40%', color: 'black', borderTop:'4px solid', marginLeft: '15px'}}/>
                        </Row>
                        <Row>
                            <p className="about-p">Hi, I'm Timothy. I'm currently a Software Engineer @ <b style={{color: '#1D539A'}}>HPE Aruba Networking</b>, working on the Layer 3 team. I'm also a recent Computer Science graduate from 
                            <b style={{color: '#1D539A'}}> California State University, Sacramento</b>. 
                            <br/><br/>I have a passion for systems and embedded software engineering, and I enjoy tackling low-level challenges that require efficient and scalable solutions. Additionally, 
                            I have a strong interest in full-stack development, which allows me to combine creative problem-solving with building user-facing applications. 
                            <br/><br/>During my time in college, I completed four internships, where I gained valuable experience in both IT and Software Engineering.
                            I'm always eager to learn new technologies, take on complex projects, and expand my skills across different domains.</p>
                        </Row>
                        <div className="about-skills"  data-aos="fade-up">
                            <Row>
                                <Row>
                                    <h4>Skillset</h4>
                                </Row>
                                <Row>
                                    <Col md = "3" xs = "3">
                                    <img src={Python} alt="Python" className="about-icon" />

                                    </Col>
                                    <Col md = "3" xs = "3">
                                        <img src={C} alt="C" className="about-icon" />
                                    </Col>
                                    <Col md = "3" xs = "3">
                                        <img src={Java} alt="Java" className="about-icon" />
                                    </Col>
                                    <Col md = "3" xs = "3">
                                        <img src={Javascript} alt="Javascript" className="about-icon" />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md = "3" xs = "3">
                                        <img src={Linux} alt="Linux" className="about-icon" />
                                    </Col>
                                    <Col md = "3" xs = "3">
                                        <img src={Git} alt="Git" className="about-icon" />
                                    </Col>
                                    <Col md = "3" xs = "3">
                                        <img src={ReactJS} alt="React" className="about-icon" />
                                    </Col>
                                    <Col md = "3" xs = "3">
                                        <img src={Node} alt="Node" className="about-icon" />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md = "3" xs = "3">
                                        <img src={Typescript} alt="TS" className="about-icon" />
                                    </Col>
                                    <Col md = "3" xs = "3">
                                        <img src={PostgreSQL} alt="Postgresql" className="about-icon" />
                                    </Col>
                                </Row>
                            </Row>
                        </div>
                        
                    </div>
                </Col>
                <Col md = "5" xs = "12">
                    <div className="about-timeline" data-aos="fade-up">
                        <Timeline position="alternate">
                        <TimelineItem>
                                <TimelineOppositeContent
                                sx={{ m: 'auto 0' }}
                                align="right"
                                variant="body2"
                                color="text.secondary"
                                >
                                Feb 2025 - Present
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineConnector />
                                        <img className = "experience-logo" src={hpeLogo}/>
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '25px', px: 2 }}>
                                    <div className='experience-content2'>
                                        <b>Hewlett Packard Enterprise</b><br/>
                                        <h8>Software Engineer</h8>
                                    </div>
                                </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                                <TimelineOppositeContent
                                sx={{ m: 'auto 0' }}
                                align="right"
                                variant="body2"
                                color="text.secondary"
                                >
                                Jun 2024 - Aug 2024
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineConnector />
                                        <img className = "experience-logo" src={hpeLogo}/>
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '25px', px: 2 }}>
                                    <div className='experience-content2'>
                                        <b>Hewlett Packard Enterprise</b><br/>
                                        <h8>Software Engineering Intern</h8>
                                    </div>
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineOppositeContent
                                sx={{ m: 'auto 0' }}
                                align="right"
                                variant="body2"
                                color="text.secondary"
                                >
                                May 2022 - May 2023
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineConnector />
                                        <img className = "experience-logo" src={smudLogo}/>
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '25px', px: 2 }}>
                                    <div className='experience-content1'>
                                        <b>SMUD</b><br/>
                                        <h7>Enterprise App Admin Intern</h7>
                                    </div>
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineOppositeContent
                                sx={{ m: 'auto 0' }}
                                align="right"
                                variant="body2"
                                color="text.secondary"
                                >
                                May 2023 - Oct 2023
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineConnector />
                                        <img className = "experience-logo" src={hpeLogo}/>
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '25px', px: 2 }}>
                                    <div className='experience-content2'>
                                        <b>Hewlett Packard Enterprise</b><br/>
                                        <h8>Software Engineering Intern</h8>
                                    </div>
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineOppositeContent
                                sx={{ m: 'auto 0' }}
                                align="right"
                                variant="body2"
                                color="text.secondary"
                                >
                                May 2022 - May 2023
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineConnector />
                                        <img className = "experience-logo" src={smudLogo}/>
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '25px', px: 2 }}>
                                    <div className='experience-content1'>
                                        <b>SMUD</b><br/>
                                        <h7>Technology & Innovation Intern</h7>
                                    </div>

                                </TimelineContent>
                            </TimelineItem>
                        </Timeline>
                    </div>
                </Col>
           </Row>
        </Container>
        </div>
    )
}

export default About