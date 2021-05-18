import React from "react";
import HistoryCard from './HistoryCard'
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './styles/About.css';

function About() {
  return (
    <Container className="About mt-5 mx-auto">
      <Row>
        {/* About Me */}
        <Col className="mb-4" md="12" lg="6">
          <h4 className="About-title mb-lg-5">
            <FontAwesomeIcon className="home-icon mr-3" size="sm" icon={['fas', 'user']} />
            <span className="mx-1">About Me</span>
          </h4>
          <p> My name is Ty, and I'm a software engineer skilled in full stack development.
            I have experience building RESTful APIs using both Node.js and Python, working with databases and ready-built APIs, and making responsive frontend UIs with React.js.
            <br/>
            <br/>
            After graduating in 2016, I moved overseas for a few years to teach English. My time over there enhanced my soft skills greatly. After some time, I felt the urge to start developing again. After some self study, the passion for development couldn't be ignored. I knew it was time to come back and start a career as a Software Developer. 
          </p>
        </Col>

        {/* Work History */}
        <Col className="mb-4" sm="12" md="6" lg="3">
          <h4 className="About-title mb-lg-5">
            <FontAwesomeIcon className="home-icon mr-3" size="sm" icon={['fas', 'building']} />
            <span className="mx-1">Work History</span>
          </h4>
          <HistoryCard title="Foreign Teacher" icons={['building', 'clock']} descriptions={['Avalon English','2017-2020']}/>
          <HistoryCard title="Desktop Technician" icons={['building', 'clock']} descriptions={['Angelo State University','2016-2017']}/>
        </Col>

        {/* Education */}
        <Col className="mb-4" sm="12" md="6" lg="3">
          <h4 className="About-title mb-lg-5">
            <FontAwesomeIcon className="home-icon mr-3" size="sm" icon={['fas', 'graduation-cap']} />
            <span className="mx-1">Education</span>
          </h4>
          <HistoryCard title="Computer Science" icons={['book', 'clock']} descriptions={['Angelo State University','2013-2016']}/>
          <HistoryCard title="Software Engineering" icons={['book', 'clock']} descriptions={['Springboard','2020-2021']}/>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
