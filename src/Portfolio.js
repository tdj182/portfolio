import React from "react";
import './styles/Portfolio.css';
import ProjectCard from './ProjectCard'
import YouTify from './images/YouTify.PNG'
import LootBag from './images/LootBag.PNG'
import MemeGenerator from './images/MemeGenerator.PNG'
import EightBall from './images/EightBall.PNG'
// import resume from './files/Ty_Johnson-Resume2021.pdf'
// import { Container, Row, Col } from 'reactstrap';

function Portfolio() {
  return (
    <div className="Portfolio container mt-3 mx-auto">
      <h2 className="Portfolio-header mb-3">My Projects</h2>
      <div className="Portfolio-area">
        <ProjectCard 
          title="YouTify" 
          image={YouTify} 
          description="React App" 
          link="https://tdj182.github.io/youtify/#/"/>
        <ProjectCard 
          title="D&D Lootbag" 
          image={LootBag} 
          description="Python App" 
          link="https://dnd-lootbag.herokuapp.com/"/>
        <ProjectCard 
          title="Meme Generator" 
          image={MemeGenerator} 
          description="It's in the name" 
          link="https://tdj182.github.io/Meme-Generator/"/>
        <ProjectCard 
          title="Magic Eight Ball" 
          image={EightBall} 
          description="It tells the future (I think?)" 
          link="https://tdj182.github.io/magic-eight-ball/"/>
      </div>
      {/* <a href="">Resume</a> */}
    </div>
  );
}

export default Portfolio;
