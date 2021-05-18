import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './styles/HistoryCard.css';

function HistoryCard({title, icons, descriptions}) {
  console.log(icons, descriptions)
  return (
    <div className="HistoryCard">
      <h4>{title}</h4>
          {/* <p><FontAwesomeIcon size="sm" icon={['fas', 'clock']} /> <span className="mx-3">2017 - 2020</span></p> */}
    </div>
  );
}

export default HistoryCard;
