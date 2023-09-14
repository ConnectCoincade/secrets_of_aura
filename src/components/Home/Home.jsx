import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
// import home1 from "../../assets/home1.png";
// import img2 from "../../assets/sec2.png";
// import img3 from "../../assets/Group 8669.png";
// import img4 from "../../assets/Group 7.png"
// import video1 from "../../assets/video1.mp4";
import {NavLink} from "react-router-dom";
import home1 from '../../assets/Group8695.png';
import img2 from '../../assets/lOGO_bLACK.png';
import img3 from '../../assets/Group7.png';
import "./Home.css";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";

const Home = () => {
  // const Testimonials = [
  //   {itme : img2},
  //   {itme : img2},
  //   {itme : img2},
  //   {itme : img2}
  // ]
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
      <section className="banner sec1">
        <img  src={home1}></img>
        <div className="banner-content">
          <div className="bold">Discover Your Aura</div>
          <div className="bold">With Us!</div>
          <p>
            Discover the power of a healthy and balanced aura! Take time to care
            for your energy field and unlock a deeper connection to yourself,
            others, and the universe. Join us on this transformative journey.
          </p>
         
          <a href="https://calendly.com/yash-h10/test-meet" target="blank">
            <button>SCHEDULE YOUR SESSION</button>
          </a>
        </div>
      </section>
      <section className="sec2">
        <img src={img2}></img>
        <div className="sec2-content">
          <div className="bold">What Is</div>
          <div className="bold">Secrets Of Aura?</div>
          <p>
            At Secrets of Aura, our objective is to simplify astrology, making
            it accessible and easy to understand. We suggest uncomplicated and
            realistic solutions that our clients can incorporate into their
            hectic schedules. We aspire to not just make predictions, but also
            to aid you in crafting the life you dream of, helping you manifest
            your destiny by aligning your thoughts with your vision.
          </p>
        </div>
      </section>

      <section className="sec3" >
        
        <video
          src="https://ipfs.filebase.io/ipfs/QmdpXotSps9n25KseMS31KugqLfrz1pAkHZDHF5uBAaGoa"
          autoplay="false"
          controls
        />
          {/* <div className="background-img">
          <img src="https://amber-creative-capybara-584.mypinata.cloud/ipfs/QmTeQAPJCuSc5oyJLWsahBVYsvd6ZEG8hFkDksXzoQuVUK/Group%208669.png" />
          </div> */}
        
        <div className="chakra-analysis-sec">
           <bold >Chakra Analysis</bold> 
          <p>
            Uncover the secrets of your energy centers with a comprehensive
            chakra analysis. Our expert practitioners will guide you through the
            process, identifying any blockages and imbalances within your
            chakras. Gain valuable insights and personalized recommendations to
            empower your personal growth, enhance your well-being, and restore
            harmonious energy flow. Take this transformative step towards a
            balanced and fulfilling life today.
          </p>
          
          <NavLink to="/chakra-analysis"><button className="btn2">GET STARTED</button></NavLink>
        </div>
          <div className="img-sec">
          <img src={img3} />
          </div>
        <div className="Testimonials-list-sec">
          <bold className="bold">Testimonials</bold>
          <Carousel
            responsive={responsive}
            infinite={true}
            containerClass="carousel-container"
            autoPlay={false}
          >
            <p className="Testimonials">
              <span>&ldquo;</span>Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur.
              <span className="upside-down">&rdquo;</span>
            </p>
            <div className="Testimonials">
              <q>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </q>
            </div>
            <div className="Testimonials">
              <q>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </q>
            </div>
            <div className="Testimonials">
              <q>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </q>
            </div>
          </Carousel>
        </div>
      </section>
      {/* </Container> */}
    </>
  );
};

export default Home;
