import React from 'react';

import './Card.css';

const Card = (props) => {
  return (
    <div className="card-services">
      <div className="card-img">
        <img src={props.img} alt="horoscope-astrology" />
      </div>
      <div className="card-textarea">
        <p className="card-header">{props.header}</p>
        <p className="card-subheader">{props.subheader}</p>
        <p className="card-para">{props.para}</p>
        <p className="card-readmore">Read More</p>
      </div>
      <button className="card-btn">
        <span className="btn-text">BOOK SESSION</span>
      </button>
    </div>
  );
};

export default Card;
