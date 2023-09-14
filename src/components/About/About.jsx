import React, { useEffect, useState } from "react";
import "./About.css"
import {Row, Col,Container} from 'react-bootstrap';
// import about_bg from "../../assets/about_bg.png";
import aboutImg from '../../assets/Nakia_02.png';
import naqqya from '../../assets/Group 8697.svg'

const About = () => {
  const openWhatsAppChat = () => {
    window.open(`https://wa.me/${process.env.REACT_APP_PHONE_NUMBER}`, '_blank');
};
  return (
    <>
     <div className="aboutus">
     
        {/* <img className="about-bg" src="https://amber-creative-capybara-584.mypinata.cloud/ipfs/QmNnTaKcDiDjcrihRcqcGwcw4ujHik768YAajLha1ceUAt/about_bg.png"/> */}
        <Container>
        <section className="sec1">
        <Row className= "sec1-main">
          <Col className="sec1-para">
            <p>Growing up, my life was like any other child’s - filled with school, friends, and play. However, there was one aspect that set me apart: I could perceive vibrant colors enveloping individuals, a phenomenon only visible to me. This unique ability was initially perplexing, as it seemed beyond my family and friends’ comprehension. </p>
            <p>Despite the confusion, life continued, and I pursued my ambitions, enjoying a fair degree of success. Yet beneath these achievements, I felt an undercurrent of unfulfillment, a sense of something amiss. Acknowledging this feeling led me to pay closer attention to my inherent ability, exploring its potential to aid those around me. The true worth of this endeavor became evident when I began positively impacting many lives. This affirmed my role as a mind and aura reader.</p>
            <p> Now, I feel grateful for the opportunity to continue facilitating positive change in people’s lives. My goal remains steadfast: to support others in finding their joy and wisdom, fostering their courage, and reinforcing their convictions. My hope is to contribute to their happiness, as we journey together on this path of personal growth.</p>
          </Col>
          <Col sm={12} md={6} className="naqqya-col">
            <img className="naqqya" src={naqqya}/>
            <img className="about-naqqya-img" src={aboutImg}/>
          </Col>
        </Row>
        </section>
        <section className="sec2">
          <video src="https://ipfs.filebase.io/ipfs/QmWKqagKgd7c4V2yneMvL3rMrRnPeQ6pesp3H43SB9CXYD" autoplay="true" controls/>
        </section>
        
      </Container>
      <section className="sect3">
          <div className="title">Secrets Of Aura</div>
          <div className="title">Vision</div>
          <p>When my spiritual guide offered me a choice between a gift to benefit myself or others, I didn’t hesitate to opt for the latter. I believe that this gift was destined for me so that I could lend a hand to as many souls as possible.</p>
          <p>used to consult astrologers, I often ended my sessions feeling more puzzled than enlightened. However, my own consultations aim to provide clear and precise answers. I receive insights that connect to your subconscious mind and your third eye. This third eye enables me to foresee life events, aiding me in making predictions for you.</p>
      </section>
      <section className="sec4">
        <div className="title">Frequently Asked Questions</div>
        <div className="FAQ-heading">Have any questions? We are here to assist you!</div>
        <div className="FAQ">
          <p className="question">
          Is aura reading similar to tarot reading?
          </p>
          <p className="answer">
            No, it’s not. Aura reading and tarot reading are two distinct practices with different methodologies and focuses. Aura reading involves perceiving and interpreting the energy fields, or auras, surrounding individuals or objects. It aims to gain insight into someone’s emotional, physical, and spiritual well-being.
          </p>
          <p className="answer">
          On the other hand, tarot reading utilizes a deck of cards with symbolic imagery to provide guidance, insights, and predictions about various aspects of a person’s life, including relationships, career, and personal growth.
          </p>
        </div>
        <div className="FAQ">
          <p className="question">
          Is kundali reading and aura reading the same?
          </p>
          <p className="answer">
          No, it’s not. Kundali reading is the analysis of an individual’s birth chart, which is a graphical representation of the positions of celestial bodies at the time of their birth. Kundali reading is used to gain insights into various aspects of a person’s life, including personality traits, relationships, career, and future events. Aura reading, on the other hand, involves perceiving and interpreting the energy fields, or auras, surrounding individuals or objects. Aura reading is focused on gaining insights into a person’s emotional, physical, and spiritual well-being.
          </p>
          
        </div>
        <div className="FAQ">
          <p className="question">
          How do I determine which prediction method is best for me?
          </p>
          <p className="answer">
          All prediction methods share a common goal - guiding you towards the right path. The method used often depends on what the astrologer is most comfortable with. Your choice should be based on the connection you feel with the reader and the method itself. Feel free to explore various modes, as all astrological approaches are capable of providing the answers you seek.
          </p>
        </div>
        <div className="FAQ">
          <p className="question">
          What is crystal healing?
          </p>
          <p className="answer">
          In simple terms, I use crystal wands to remove negative energy in your aura. These crystals have earth energy and this helps me bring balance and healing to your body and mind.
          </p>
        </div>
        <div className="FAQ">
          <p className="question">
          Do I need oxygen therapy?
          </p>
          <p className="answer">
          If you are suffering from stress, anxiety, and blood pressure, our oxygen therapy coupled with healing can calm your mind by giving you the purest form of oxygen and that helps in increasing auric energy.
          </p>
        </div>
        <div className="FAQ">
          <p className="question">
          What is sound therapy?
          </p>
          <p className="answer">
          Our sound therapy consists of specially designed binaural beats that activate your neurons in positive direction and thus help in cleansing your energy and activating your chakras.
          </p>
        </div>
        <div className="FAQ">
          <p className="question">
          What kind of questions I can ask?
          </p>
          <p className="answer">
          If you’ve found your way to my page, it’s likely you’re in search of some clarity. Please feel free to ask anything that’s on your mind - no question is off-limits.
          </p>
        </div>
        <div className="FAQ">
          <p className="question">
          What kind of solutions do you provide to my problems?
          </p>
          <p className="answer">
          At times, there might not be a straightforward resolution, but a need to shift perspectives. In some instances, I might have a simple and direct solution. However, without a consultation, it’s impossible to guarantee that I can address all your concerns.
          </p>
        </div>
        <div className="FAQ">
          <p className="question">
          Can you helps me with fear anxiety and mental issues?
          </p>
          <p className="answer">
          While I’m not a certified therapist to provide mental health treatment, I can certainly aid in alleviating your feelings of anxiety and restlessness through the various healing therapies I offer.
          </p>
        </div>
      </section>
      <section className="sect5">
        <div className="ask">Can’t find the answers you are looking for?</div>
        <button className="whatsapp" onClick={openWhatsAppChat}>Get In Touch On WhatsApp</button>
      </section>
      </div>
    </>
  );
};

export default About;
