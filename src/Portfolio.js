import React from "react";
import './styles/Portfolio.css';
import ProjectCard from './ProjectCard'
import YouTify from './images/YouTify.PNG'
import LootBag from './images/LootBag.PNG'
// import { Container, Row, Col } from 'reactstrap';

function Portfolio() {
  return (
    <div className="Portfolio container mt-5 mx-auto">
      <ProjectCard 
        title="YouTify" 
        image={YouTify} 
        description="React App that connects Spotify with YouTube" 
        link="https://tdj182.github.io/youtify/#/"/>
      <ProjectCard 
        title="D&D Lootbag" 
        image={LootBag} 
        description="Python App" 
        link="https://dnd-lootbag.herokuapp.com/"/>
    </div>
  );
}

export default Portfolio;
