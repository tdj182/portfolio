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
          <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </Col>

        {/* Work History */}
        <Col className="mb-4" sm="12" md="6" lg="3">
          <h4 className="About-title mb-lg-5">
            <FontAwesomeIcon className="home-icon mr-3" size="sm" icon={['fas', 'building']} />
            <span className="mx-1">Work History</span>
          </h4>
          <HistoryCard title="Foreign Teacher" icons={['clock']} descriptions={['2017-2020']}/>
          {/* <h4>Foreign Teacher</h4>
          <p><FontAwesomeIcon size="sm" icon={['fas', 'clock']} /> <span className="mx-3">2017 - 2020</span></p> */}
        </Col>

        {/* Education */}
        <Col className="mb-4" sm="12" md="6" lg="3">
          <h4 className="About-title mb-lg-5">
            <FontAwesomeIcon className="home-icon mr-3" size="sm" icon={['fas', 'graduation-cap']} />
            <span className="mx-1">Education</span>
          </h4>
          <h4>Computer Science</h4>
          <p><FontAwesomeIcon size="sm" icon={['fas', 'book']} /> <span className="mx-3">Angelo State University</span></p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
