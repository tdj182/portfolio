import React from "react";
import {
  Card, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle
} from 'reactstrap';
import './styles/ProjectCard.css';

function ProjectCard({title, image, description, link}) {
  return (
      <Card className="ProjectCard mx-auto">
        <CardBody>
          <CardTitle className="ProjectCard-title" tag="h5">{title}</CardTitle>
        </CardBody>
        <img width="100%" src={image} alt="Card" />
        <CardBody>
          <CardText>{description}</CardText>
          <CardLink href={link}>Visit site</CardLink>
        </CardBody>
      </Card>
  );
}

export default ProjectCard;
