import { Container, Row, Col } from 'react-bootstrap'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import smudLogo from "../../../src/Images/smud.jpeg"
import hpeLogo from "../../../src/Images/hpe.png"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react'

const Experience = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    })
    return(
        <div className="experience-section">
            <Container>
                <Row>
                    <h2>experience</h2>
                </Row>
                <Row>
                    <Col md = "6" xs = "12" className='spline-object'>
                        <div className="planet" data-aos="fade-up">
                            <iframe src='https://my.spline.design/planetcopy-da5d7a5882cb643d2f12cfd2d93c574c/' width='100%' height='100%'></iframe>
                        </div>
                    </Col>
                    <Col md = "6" xs = "12">
                    <div className='experience-timeline' data-aos="fade-up">
                        <Timeline position="alternate">
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

export default Experience

