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
import Spline from '@splinetool/react-spline';
import Planet from '../../Images/World';

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
                        <div data-aos="fade-up" style={{width:"512px", height:"512px"}}>
                            <iframe src='https://my.spline.design/planetcopy-da5d7a5882cb643d2f12cfd2d93c574c/' width='100%' height='100%'></iframe>
                        </div>
                        {/* <Planet/> */}
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
                                Jun 2024 - Present
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                <TimelineConnector />
                                <img src={hpeLogo} style={{width: '10vh', borderRadius: "2rem"}}/>
                                <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '25px', px: 2 }}>
                                    <b style={{fontSize: "2.4vh"}}>Hewlett Packard Enterprise</b><br/>
                                    <h7 style={{fontSize: "2.3vh"}}>Software Engineering Intern</h7>
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
                                <img src={smudLogo} style={{width: '10vh', borderRadius: "2rem"}}/>
                                <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '25px', px: 2 }}>
                                    <div className='experience-content'>
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
                                <img src={hpeLogo} style={{width: '10vh', height:'auto',borderRadius: "10rem"}}/>
                                <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '25px', px: 2 }}>
                                    <b style={{fontSize: "2.4vh"}}>Hewlett Packard Enterprise</b><br/>
                                    <h8 style={{fontSize: "2.3vh"}}>Software Engineering Intern</h8>
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
                                <img src={smudLogo} style={{width: '10vh', borderRadius: "2rem"}}/>
                                <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '25px', px: 2 }}>
                                    <div className='experience-content'>
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

