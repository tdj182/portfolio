import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './styles/HistoryCard.css';

function HistoryCard({title, icons, descriptions}) {

  //Display the icons and the descriptions along side each other
  function buildCardDetails() {
    return icons.map((icon, i) => 
      <p className="text-primary" key={i}>
        <FontAwesomeIcon size="sm" icon={['fas', icon]} /> <span className="mx-3">{descriptions[i]}</span>
      </p>
    );
  }

  return (
    <div className="HistoryCard">
      <h4>{title}</h4>
      {buildCardDetails()}
    </div>
  );
}

export default HistoryCard;
