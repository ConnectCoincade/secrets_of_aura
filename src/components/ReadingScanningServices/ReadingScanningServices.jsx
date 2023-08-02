import React from 'react';
import './ReadingScanningServices.css';
import Card from './Card/Card';

const ReadingScanningServices = () => {
  const cardDetails = [

    {
      img: 'https://amber-creative-capybara-584.mypinata.cloud/ipfs/QmTeQAPJCuSc5oyJLWsahBVYsvd6ZEG8hFkDksXzoQuVUK/high-angle-woman-reading-tarot.png',
      header: 'TAROT READING',
      subheader:
        '15 MINS SESSION - INR 1500/- | 45 MINS SESSION - INR 4500/- | ONLINE AND IN-PERSON',
      para: `In our tarot reading service, we delve into your past, present, and future, providing valuable insights to assist in your journey of self-discovery. Whether you are seeking clarity about relationships, career choices, personal growth, or your life's direction, our tarot reading can offer illuminating insights...`,
    },
    {
      img: 'https://amber-creative-capybara-584.mypinata.cloud/ipfs/QmTeQAPJCuSc5oyJLWsahBVYsvd6ZEG8hFkDksXzoQuVUK/horoscope-astrology.png',
      header: 'Kundali Reading',
      subheader:
        'PER SESSION - INR 1500/- | KUNDALI SESSION + KUNDALI REPORT - INR 3000/- | ONLINE ONLY',
      para: 'Our Kundali reading service offers a comprehensive interpretation of your birth chart. Your personalized chart, unique to your time and place of birth, represents the positions of the sun, moon, planets, and other celestial bodies, and their...',
    },
    {
      img: 'https://amber-creative-capybara-584.mypinata.cloud/ipfs/QmTeQAPJCuSc5oyJLWsahBVYsvd6ZEG8hFkDksXzoQuVUK/numerology-collage-concept.png',
      header: 'AURA AND HOROSCOPE READING',
      subheader:
        'QUICK CONSULTATION - 1 QUESTION ONLY - INR 500/- | COMPREHENSIVE ANALYSIS - PER SESSION - INR 4500/- | ONLINE AND IN-PERSON',
      para: `It's not uncommon for different astrologers to provide varying interpretations when it comes to horoscope matching, leading to confusion. To alleviate this, we offer a combined service of aura matching along with horoscope compatibility....`,
    }
  ];

  return (
    <>
      <p className="header-text">Reading/Scanning Services</p>
      <Card
        img={cardDetails[0].img}
        header={cardDetails[0].header}
        subheader={cardDetails[0].subheader}
        para={cardDetails[0].para}
      />
      <Card
        img={cardDetails[1].img}
        header={cardDetails[1].header}
        subheader={cardDetails[1].subheader}
        para={cardDetails[1].para}
      />
      <Card
        img={cardDetails[2].img}
        header={cardDetails[2].header}
        subheader={cardDetails[2].subheader}
        para={cardDetails[2].para}
      />
      <p className="enq-text">Would you like to enquire further?</p>
      <div className="btn-div">
        <button className="card-btn new-btn">
          <span className="btn-text">Get In Touch On WhatsApp</span>
        </button>
      </div>
    </>
  );
};

export default ReadingScanningServices;
