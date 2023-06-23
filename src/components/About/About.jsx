import React, { useEffect, useState } from "react";
import "./About.css"
import {Row, Col,Container} from 'react-bootstrap';
// import about_bg from "../../assets/about_bg.png"

const About = () => {
  
  return (
    <>
     <section className="sec1">
      {/* <div class="container-fluid aboutus"> */}
        <img className="about-bg" src="https://amber-creative-capybara-584.mypinata.cloud/ipfs/QmYoTzFteHro1tJHRgLgfBiRhLu348hWX53j9JVpx3NBvR/about_bg.png"/>
        <Container>
        <Row>
          <Col>
          <p></p>
          </Col>
          <Col>1 of 1</Col>
        </Row>
      </Container>
      {/* </div> */}
     </section>
    </>
  );
};

export default About;
