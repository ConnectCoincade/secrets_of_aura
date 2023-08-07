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
        {/* <p className="card-readmore">Read More</p> */}
      </div>
      <a  href="https://calendly.com/yash-h10/test-meet" target="blank">
        <div className='card-btn-main'>
        <button className="card-btn">
          <span className="btn-text">BOOK SESSION</span>
        </button>
        </div>
      </a>
    </div>
  );
};

export default Card;
