import React, { useEffect, useState } from "react";
import "./AuraReading.css"
import {Row, Col,Container} from 'react-bootstrap';
import Carousel from "react-multi-carousel";
// import Assets from '../../assets/aura-cleansing.jpg'
import Image1 from '../../assets/meditation.png';
import Image2 from '../../assets/hands.png';
import Image3 from '../../assets/emotional-intelligence.png';
import Image4 from '../../assets/XMLID_787_.png';
import Image5 from '../../assets/11 - 20.png';
import Image6 from '../../assets/Group 8718.png';
import Image7 from '../../assets/Group 8875.png';
const newImage = require('../../assets/aura-cleansing.jpg');

const AuraReading = () => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
     <div className="aura-reading">
        <section className="sec1">
        <video src="https://ipfs.filebase.io/ipfs/QmerM5CSd3MaUuVTB5cgejpXt9kAHHuXtorv9aW37GVtog" autoplay="true" controls/>
        </section>
        <section className="sec2 aura-consultation">
            <div className="title">Aura Consultation</div>
            <p>Unlock the hidden colors of your aura and gain profound insights about your energy field. Schedule an aura reading session today and discover a deeper understanding of yourself and your spiritual well-being.</p>
            <div className="book-session1">
              <p>Aura Consultation 60 MINS SESSION INR 3000/-</p>
              <button disabled>BOOK SESSION</button>
            </div>
            <div className="book-session2">
              <p>Aura Consultation + Chakra Analysis INR 4500/-</p>
              <button disabled>BOOK SESSION</button>
            </div>
        </section>
        {/* <div className="Testimonials-list-sec">
          <bold className="bold">Benefits of aura reading</bold>
          <Carousel
            responsive={responsive}
            infinite={true}
            containerClass="carousel-container"
            autoPlay={false}
          >
             <div className="Testimonials1">
              <Col lg="4" md="4" className="sec5-col">
                <div className="img-div">
                <img src="https://amber-creative-capybara-584.mypinata.cloud/ipfs/QmTeQAPJCuSc5oyJLWsahBVYsvd6ZEG8hFkDksXzoQuVUK/XMLID_787_.png"/>
                </div> */}
                {/* <p className="col-heading">Self Awareness</p> */}
                {/* <bold className="">Self Awareness</bold>
                <p className="col-p">aura reading can help you become more aware of your own energy and emotions, which can improve your ability to manage stress, make better decisions, and maintain healthy relationships</p>
              </Col>
              </div>
            <div className="Testimonials1">
              <Col lg="4" md="4" className="sec5-col">
              <div className="img-div">
                <img src="https://amber-creative-capybara-584.mypinata.cloud/ipfs/QmTeQAPJCuSc5oyJLWsahBVYsvd6ZEG8hFkDksXzoQuVUK/11%20-%2020.png"/>
              </div>
                <p className="">Relationship Insights</p>
                <p className="col-p">by reading someone’s aura, you may be able to gain insights into their personality, emotions, and energy patterns, which can help you better understand and communicate with them</p>
              </Col>
            </div>
            <div className="Testimonials1"> 
               <Col lg="4" md="4" className="sec5-col">
              <div className="img-div">
                <img src="https://amber-creative-capybara-584.mypinata.cloud/ipfs/QmTeQAPJCuSc5oyJLWsahBVYsvd6ZEG8hFkDksXzoQuVUK/emotional-intelligence.png"/>
              </div>
                <p className="">Emotional Healing</p>
                <p className="col-p">aura reading can help identify emotional blockages or imbalances in the body’s energy field, allowing for targeted healing work to be done to release these blockages</p>
              </Col>
            </div>
                  <div className="Testimonials1">
                 <Col lg="6" md="6" className="sec5-col">
                 {/* <Col lg="5" md="5" className="sec5-col"> */}
              {/* <div className="img-div">
                <img src="https://amber-creative-capybara-584.mypinata.cloud/ipfs/QmTeQAPJCuSc5oyJLWsahBVYsvd6ZEG8hFkDksXzoQuVUK/hands.png"/>
              </div>
                <p className="">Energy Awareness</p>
                <p className="col-p">aura reading can help you become more aware of the energy around you, allowing you to better navigate and manage the energy of the people and environments you encounter </p>
              </Col>
            </div>
            <div className="Testimonials1">
              <Col lg="6" md="6" className="sec5-col">
              <div className="img-div">
                <img src="https://amber-creative-capybara-584.mypinata.cloud/ipfs/QmTeQAPJCuSc5oyJLWsahBVYsvd6ZEG8hFkDksXzoQuVUK/meditation.png"/>
              </div>
                <p className="">Spiritual Growth</p>
                <p className="col-p">aura reading can be a tool for spiritual development, helping you to deepen your connection to your higher self and the divine </p>
              </Col> */}
              {/* </div> */} 
{/*            

              </div> */}
  
          {/* </Carousel> */}
        </div>
        <section className="sec3">
          <div className="title">The process of Aura Reading</div>
          {/* Group 8718 */}
          
          <img src={Image6}/>
        </section>
        <section className="sectionc-4">
        <Row>
            <Col lg="6" md="6">
              <div className="title">What is Aura Reading?</div>
              <p>Have you ever pondered why two individuals, born at the exact same time and place, experience divergent life paths? Allow me to explain. </p>
              <p>When you visit an astrologer, they use your birth details - time and place, relative to Earth - to interpret the positions of celestial bodies, creating what’s known as your cosmic connection. However, this overlooks a major celestial body, our home planet - Earth. </p>
              <p>An aura is essentially your personal link to Earth, termed as auric energy. In an aura reading, we tap into this energy, which is in direct contact with your subconscious mind and soul. By accessing this energy, we’re able to provide you with a consultation based on insights gleaned through my visionary capabilities.</p>
              <p>Aura reading is a unique service we offer that taps into the personal energy field surrounding you, also known as your aura. This energy is intricately connected to your subconscious mind and soul, reflecting your inner state and potential. By interpreting the specific characteristics of your aura – its colors, patterns, and densities, our skilled readers gain insights into various aspects of your life. This understanding can help you unravel the complexities of your emotions, relationships, health, and spiritual growth. With these insights, you can better navigate life’s challenges and enhance your overall wellbeing.</p>
            </Col>
            <Col lg="6" md="6" className="img-div section-4-img">
              <img src={Image7} />
            </Col>
          </Row>
        </section>
        <section className="sec5">
          {/* <div className="title">Benefits of aura reading</div> */}
          <Container fluid>
            <Row>
              {/* <Col lg="4" md="4" className="sec5-col">
                <div className="img-div">
                <img src="https://amber-creative-capybara-584.mypinata.cloud/ipfs/QmTeQAPJCuSc5oyJLWsahBVYsvd6ZEG8hFkDksXzoQuVUK/XMLID_787_.png"/>
                </div>
                <p className="col-heading">Self Awareness</p>
                <p className="col-p">aura reading can help you become more aware of your own energy and emotions, which can improve your ability to manage stress, make better decisions, and maintain healthy relationships</p>
              </Col> */}
              {/* <Col lg="4" md="4" className="sec5-col">
              <div className="img-div">
                <img src="https://amber-creative-capybara-584.mypinata.cloud/ipfs/QmTeQAPJCuSc5oyJLWsahBVYsvd6ZEG8hFkDksXzoQuVUK/11%20-%2020.png"/>
              </div>
                <p className="col-heading">Relationship Insights</p>
                <p className="col-p">by reading someone’s aura, you may be able to gain insights into their personality, emotions, and energy patterns, which can help you better understand and communicate with them</p>
              </Col> */}
              {/* <Col lg="4" md="4" className="sec5-col">
              <div className="img-div">
                <img src="https://amber-creative-capybara-584.mypinata.cloud/ipfs/QmTeQAPJCuSc5oyJLWsahBVYsvd6ZEG8hFkDksXzoQuVUK/emotional-intelligence.png"/>
              </div>
                <p className="col-heading">Emotional Healing</p>
                <p className="col-p">aura reading can help identify emotional blockages or imbalances in the body’s energy field, allowing for targeted healing work to be done to release these blockages</p>
              </Col> */}
            </Row>
            <Row>
              {/* <Col lg="6" md="6" className="sec5-col">
              <div className="img-div">
                <img src="https://amber-creative-capybara-584.mypinata.cloud/ipfs/QmTeQAPJCuSc5oyJLWsahBVYsvd6ZEG8hFkDksXzoQuVUK/meditation.png"/>
              </div>
                <p className="col-heading">Spiritual Growth</p>
                <p className="col-p">aura reading can be a tool for spiritual development, helping you to deepen your connection to your higher self and the divine</p>
              </Col> */}
              {/* <Col lg="6" md="6" className="sec5-col">
              <div className="img-div">
                <img src="https://amber-creative-capybara-584.mypinata.cloud/ipfs/QmTeQAPJCuSc5oyJLWsahBVYsvd6ZEG8hFkDksXzoQuVUK/hands.png"/>
              </div>
                <p className="col-heading">Energy Awareness</p>
                <p className="col-p">aura reading can help you become more aware of the energy around you, allowing you to better navigate and manage the energy of the people and environments you encounter</p>
              </Col> */}
            </Row>
          </Container>
        </section>
        <div className="Testimonials-list-sec">
          <bold className="bold1">Benefits of Aura Reading</bold>
          <Carousel
            responsive={responsive}
            infinite={true}
            containerClass="carousel-container"
            autoPlay={false}
          >
             <div className="Testimonials1">
              <Col lg="4" md="4" className="sec5-col">
                <div className="img-div">
                {/* <img src="https://amber-creative-capybara-584.mypinata.cloud/ipfs/QmTeQAPJCuSc5oyJLWsahBVYsvd6ZEG8hFkDksXzoQuVUK/XMLID_787_.png"/> */}
                <img src={Image4} alt="selfawareness.png"/>

                </div>
                {/* <p className="col-heading">Self Awareness</p> */}
                <bold className="">Self Awareness</bold>
                <p className="col-p1">"aura reading can help you become more aware of your own energy and emotions, which can improve your ability to manage stress, make better decisions, and maintain healthy relationships"</p>
              </Col>
              </div>
            <div className="Testimonials1">
              <Col lg="4" md="4" className="sec5-col">
              <div className="img-div">
                {/* <img src="https://amber-creative-capybara-584.mypinata.cloud/ipfs/QmTeQAPJCuSc5oyJLWsahBVYsvd6ZEG8hFkDksXzoQuVUK/11%20-%2020.png"/> */}
                <img src={Image5} alt="hands.png"/>
              </div>
                <p className="">Relationship Insights</p>
                <p className="col-p1">"by reading someone’s aura, you may be able to gain insights into their personality, emotions, and energy patterns, which can help you better understand and communicate with them"</p>
              </Col>
            </div>
            <div className="Testimonials1"> 
               <Col lg="4" md="4" className="sec5-col">
              <div className="img-div">
                {/* <img src="https://amber-creative-capybara-584.mypinata.cloud/ipfs/QmTeQAPJCuSc5oyJLWsahBVYsvd6ZEG8hFkDksXzoQuVUK/emotional-intelligence.png"/> */}
                <img src={Image3} alt="emotionalhealing.png"/>
              </div>
                <p className="">Emotional Healing</p>
                <p className="col-p1">"aura reading can help identify emotional blockages or imbalances in the body’s energy field, allowing for targeted healing work to be done to release these blockages"</p>
              </Col>
            </div>
                  <div className="Testimonials1">
                 <Col lg="6" md="6" className="sec5-col">
                 {/* <Col lg="5" md="5" className="sec5-col"> */}
              <div className="img-div">
                {/* <img src="https://amber-creative-capybara-584.mypinata.cloud/ipfs/QmTeQAPJCuSc5oyJLWsahBVYsvd6ZEG8hFkDksXzoQuVUK/hands.png"/> */}
                <img src={Image2} alt="circle.png"/>
              </div>
                <p className="">Energy Awareness</p>
                <p className="col-p1">"aura reading can help you become more aware of the energy around you, allowing you to better navigate and manage the energy of the people and environments you encounter"</p>
              </Col>
            </div>
            <div className="Testimonials1">
              <Col lg="6" md="6" className="sec5-col">
              <div className="img-div">
                {/* <img src="https://amber-creative-capybara-584.mypinata.cloud/ipfs/QmTeQAPJCuSc5oyJLWsahBVYsvd6ZEG8hFkDksXzoQuVUK/meditation.png"/> */}
                <img src={Image1} alt="spiritual.png"/>
              </div>
                <p className="">Spiritual Growth</p>
                <p className="col-p1">"aura reading can be a tool for spiritual development, helping you to deepen your connection to your higher self and the divine" </p>
              </Col>
              </div>
{/*            

              </div> */}
  
          </Carousel>
        </div>
         {/* <section className="sec3"> */}
         <div className="aura-transformation-sec">
          <div className="img-1" style={{backgroundImage: `url('${newImage}')`}}>
              <div className="data">
                <bold className="img1-title xyz">Aura Transformation</bold> 
                <div className="content">Our Aura Transformation service is a comprehensive process designed to balance your energy centers, also known as chakras, and remove any impediments within your aura. These blockages can impact not only your physical and mental health, but also your professional and personal life. Through a series of specialized energy healing techniques, we work to clear these blockages, repair any damage, and fortify your aura, thereby enhancing your connection to Earth and your subconscious. Once these hindrances are removed, you’ll be better positioned to actualize your desires and aspirations without any obstructions. This transformation not only brings a harmonious balance in your life but also promotes a more fulfilling and prosperous life experience.</div>
              </div>
          </div>
         </div>
          
          
          
          {/* Group 8718 */}
          
           {/* <img src="https://amber-creative-capybara-584.mypinata.cloud/ipfs/QmTeQAPJCuSc5oyJLWsahBVYsvd6ZEG8hFkDksXzoQuVUK/Group 8718.png"/>
        </section>
        <section className="sec4">
        <Container>
        <Row>
            <Col lg="6" md="6">
              <div className="title">What is Aura Reading?</div>
              <p>Have you ever pondered why two individuals, born at the exact same time and place, experience divergent life paths? Allow me to explain. </p>
              <p>When you visit an astrologer, they use your birth details - time and place, relative to Earth - to interpret the positions of celestial bodies, creating what’s known as your cosmic connection. However, this overlooks a major celestial body, our home planet - Earth. </p>
              <p>An aura is essentially your personal link to Earth, termed as auric energy. In an aura reading, we tap into this energy, which is in direct contact with your subconscious mind and soul. By accessing this energy, we’re able to provide you with a consultation based on insights gleaned through my visionary capabilities.</p>
              <p>Aura reading is a unique service we offer that taps into the personal energy field surrounding you, also known as your aura. This energy is intricately connected to your subconscious mind and soul, reflecting your inner state and potential. By interpreting the specific characteristics of your aura – its colors, patterns, and densities, our skilled readers gain insights into various aspects of your life. This understanding can help you unravel the complexities of your emotions, relationships, health, and spiritual growth. With these insights, you can better navigate life’s challenges and enhance your overall wellbeing.</p>
            </Col>
            <Col lg="6" md="6" className="img-div">
              <img src="https://amber-creative-capybara-584.mypinata.cloud/ipfs/QmTeQAPJCuSc5oyJLWsahBVYsvd6ZEG8hFkDksXzoQuVUK/Group%208875.png" />
            </Col>
          </Row>
        </Container>  */}
        {/* </section> */}
        
      {/* </div> */}
    </>
  );
};

export default AuraReading;
