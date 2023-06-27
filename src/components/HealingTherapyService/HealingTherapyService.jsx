import React from 'react';
import './HealingTherapyService.css';
import Card from '../ReadingScanningServices/Card/Card';

const HealingTherapyService = () => {
  const cardDetails = [
    {
      img: 'https://amber-creative-capybara-584.mypinata.cloud/ipfs/QmTeQAPJCuSc5oyJLWsahBVYsvd6ZEG8hFkDksXzoQuVUK/magic-composition-with-pink-candle-crystals-pagan-bag-flowers.png',
      header: 'WAND HEALING',
      subheader:
        '1 SESSION - INR 3000/- | 5 SESSIONS - INR 12,000/- | 10 SESSIONS - INR 20,000/- | IN-PERSON ONLY',
      para: 'Our Wand Healing service commences by identifying your energy blockages with the aid of a pendulum. Once detected, we use different crystal wands to target and remove these obstructions, align your chakras, and balance your auric energies...',
    },
    {
      img: 'https://amber-creative-capybara-584.mypinata.cloud/ipfs/QmTeQAPJCuSc5oyJLWsahBVYsvd6ZEG8hFkDksXzoQuVUK/beautiful-amethyst-crystals-round-rose-quartz-stone-with-dry-lavender-bouquet-magic-amulets.png',
      header: 'CRYSTAL THERAPY',
      subheader:
        'THIS THERAPY IS COUPLED WITH CONSULTATIONS ONLY. YOU CANNOT BUY THIS SERVICE SEPARATELY | ONLINE AND IN-PERSON',
      para: `Crystals, being reservoirs of Earth's energy, are known for their healing properties. We harness this energy to address various issues related to your career, relationships, finances, personal life, and health through tailored remedies.`,
    },
    {
      img: 'https://amber-creative-capybara-584.mypinata.cloud/ipfs/QmTeQAPJCuSc5oyJLWsahBVYsvd6ZEG8hFkDksXzoQuVUK/WhatsApp%20Image%202023-06-07%20at%201.08.16%20PM.png',
      header: 'AIRENERGY THERAPY',
      subheader:
        '30 MINS SESSION - INR 800/- | 45 MINS SESSION - INR 1000/- | IN-PERSON ONLY',
      para: `Our Airenery Therapy employs a technique that stimulates ambient oxygen using specific monochromatic light, after filtering out harmful pollutants. This process enhances the benefits of mindful breathing, a proven method for reducing stress, anxiety, and blood pressure, and even potentially reducing the risk of cancer...`,
    },
  ];

  return (
    <>
      <p className="header-text">Healing & Therapy Service</p>
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
        <button className="card-btn">
          <span className="btn-text">Get In Touch On WhatsApp</span>
        </button>
      </div>
    </>
  );
};

export default HealingTherapyService;
