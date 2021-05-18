import React from "react";
import './styles/Home.css';
import profilePicture from './images/profile_pic.jpg'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Home() {
  return (
    <div className="Home container mt-5 mx-auto">
      <div className="home-circular-portrait mb-3 m-auto">
        <img src={profilePicture} alt="Profile_Picture" />;
      </div>
      <h2>Ty Johnson</h2>
      <p>Web Developer</p>
      <hr className="mx-auto"/>
      <a href="https://github.com/tdj182">
        <FontAwesomeIcon className="home-icon" size="2x" icon={['fab', 'github']} />
      </a>
      <a href="https://www.linkedin.com/in/ty-dakota-johnson/">
        <FontAwesomeIcon className="home-icon" size="2x" icon={['fab', 'linkedin']} />
      </a>
      
    </div>
  );
}

export default Home;
