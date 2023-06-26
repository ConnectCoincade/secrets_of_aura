import React, { useEffect, useState } from "react";
import "./AuraReading.css"
import {Row, Col,Container} from 'react-bootstrap';

const About = () => {
  return (
    <>
     <div className="aura-reading">
        <section className="sec1">
        <video src="https://amber-creative-capybara-584.mypinata.cloud/ipfs/QmTeQAPJCuSc5oyJLWsahBVYsvd6ZEG8hFkDksXzoQuVUK/Comp 4.mp4" autoplay="true" controls/>
        </section>
        <section className="sec2 aura-consultation">
            <div className="title">Aura Consultation</div>
        </section>
      </div>
    </>
  );
};

export default About;
