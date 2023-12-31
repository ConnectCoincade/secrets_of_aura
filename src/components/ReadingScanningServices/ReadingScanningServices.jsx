import React from 'react';
import './ReadingScanningServices.css';
import Card from './Card/Card';
import Scanimage1 from '../../assets/high-angle-woman-reading-tarot.png';
import Scanimage2 from '../../assets/horoscope-astrology.png';
import Scanimage3 from '../../assets/numerology-collage-concept.png';

const ReadingScanningServices = () => {
  const cardDetails = [

    {
      img: Scanimage1,
      header: 'TAROT READING',
      subheader:
        '15 MINS SESSION - INR 1500/- | 45 MINS SESSION - INR 4500/- | ONLINE AND IN-PERSON',
      para: `In our tarot reading service, we delve into your past, present, and future, providing valuable insights to assist in your journey of self-discovery. Whether you are seeking clarity about relationships, career choices, personal growth, or your life's direction, our tarot reading can offer illuminating insights...`,
    },
    {
      img: Scanimage2,
      header: 'Kundali Reading',
      subheader:
        'PER SESSION - INR 1500/- | KUNDALI SESSION + KUNDALI REPORT - INR 3000/- | ONLINE ONLY',
      para: 'Our Kundali reading service offers a comprehensive interpretation of your birth chart. Your personalized chart, unique to your time and place of birth, represents the positions of the sun, moon, planets, and other celestial bodies, and their...',
    },
    {
      img: Scanimage3,
      header: 'AURA AND HOROSCOPE READING',
      subheader:
        'QUICK CONSULTATION - 1 QUESTION ONLY - INR 500/- | COMPREHENSIVE ANALYSIS - PER SESSION - INR 4500/- | ONLINE AND IN-PERSON',
      para: `It's not uncommon for different astrologers to provide varying interpretations when it comes to horoscope matching, leading to confusion. To alleviate this, we offer a combined service of aura matching along with horoscope compatibility....`,
    }
  ];
  const openWhatsAppChat = () => {
    window.open(`https://wa.me/${process.env.REACT_APP_PHONE_NUMBER}`, '_blank');
};
  return (
    <>
      <p className="header-text">Reading & Scanning Services</p>
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
      <button className="whatsapp" onClick={openWhatsAppChat}>
            Get In Touch On WhatsApp
          </button>
      </div>
    </>
  );
};

export default ReadingScanningServices;
