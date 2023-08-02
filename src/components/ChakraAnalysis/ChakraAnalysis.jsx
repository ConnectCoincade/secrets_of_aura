import React, { useEffect, useState } from "react";
import "./ChakraAnalysis.css"
import {Row, Col,Container, Modal} from 'react-bootstrap';
import VerticallyCenteredModal from '../../container/VerticallyCenteredModal/VerticallyCenteredModal';
import { useGlobalContext } from "../../context/QuestionContext";
import FeedbackInputModal from "../../container/FeedbackInputModal/FeedbackInputModal";
import MusicLibraryModal from "../../container/musicLibrary/musicLibrary";
const phoneNumber = process.env.REACT_APP_PHONE_NUMBER; 


const ChakraAnalysis = () => {
    const [modalShow, setModalShow] = React.useState(false);
    const [musicLibraryModalShow, setMusicLibraryModalShow] = React.useState(false);

    const openWhatsAppChat = () => {
        window.open(`https://wa.me/${process.env.REACT_APP_PHONE_NUMBER}`, '_blank');
    };
    
      const queObj = [
        {quest : 'Do you feel a very strong spiritual connect?',ans : '', number : 1},
        {quest : 'Do you feel you are intuitive?',ans : '', number : 2},
        {quest : 'How good are u at expressing yourself and your feelings?',ans : '', number : 3},
        {quest : 'Are you very sensitive or do you get hurt very often?',ans : '', number : 4},
        {quest : 'Do u have any stomach or health related issues? OR Do feel lack of confidence?',ans : '', number : 5},
        {quest : 'Sexual desire?',ans : '', number : 6},
        {quest : 'Do u feel secure and stable/balanced in your life?',ans : '', number : 7}
    ]
 

    const [questions, setQuestions] = React.useState(queObj);
    // const { answersList } = useGlobalContext()

    useEffect(() => {
        //  console.log('questions in chakra analysis->', questions);
        // console.log(answersList);
      
    })
  return (
    <>
        <div className="chakra-analysis">
            <section className="sec1">
                <p className="title1">Unlock the potential for balance,</p>
                <p className="title2"> healing, and personal growth!</p>
                <button className="sec1-btn" onClick={() => setModalShow(true)}>TAKE QUIZ</button>
            </section>
            <section className="sec2">
                <div className="title">What is Chakra Analysis?</div>
                <p className="sec2-p">The chakras, vital energy centers of the body, play a pivotal role in maintaining our overall well-being. Derived from the Sanskrit term for ‘wheels,’ chakras represent the rotating energy hubs that infuse our body with life-force, sculpting our aura. This aura acts as a protective energy shield, much akin to our body’s immune system. Any imbalance in these powerhouses of energy (the chakras) can have profound effects, not only on our physical health but also on our mental and spiritual states. This delicate harmony of energies within us is critical in maintaining a state of holistic health and vitality. These energy centers each play a crucial role in balancing our physical, emotional, and spiritual health. When they are all working in harmony, we are more capable of achieving personal growth and well-being. Various practices such as meditation, yoga, energy healing, and mindful awareness can be used to activate, cleanse, and balance the chakras.</p>
            </section>
            <section className="sec3 chakra-consultation">
                <div className="title">Chakra Consultation</div>
                <p>During a chakra analysis, we evaluate the energy processes within the human body, processes that are mirrored in one’s heart rate. This examination allows us to compile an integral index, which, in terms of physical substance, aligns closely with the concept of an aura. This procedure is conducted using specialized equipment and must be carried out in person. However, we also offer an online chakra analysis.</p>
                <div className="book-session1">
                <p>Online Chakra Consultation INR 2000/-</p>
                <button>BOOK SESSION</button>
                </div>
                <div className="book-session2">
                <p>In-person Chakra Consultation INR 2500/-</p>
                <button>BOOK SESSION</button>
                </div>
            </section>
            <section className="sec4">
                <div className="title">
                An introduction to the seven chakras
                </div>
                <Container>
                    <Row>
                    <Col lg="3" md="3" className="sec5-col">
                        <div className="img-div-sec4">
                        <img className="chakra-img" src="https://amber-creative-capybara-584.mypinata.cloud/ipfs/QmTeQAPJCuSc5oyJLWsahBVYsvd6ZEG8hFkDksXzoQuVUK/Group%208751.png"/>
                        </div>
                        <article className="col-heading">Root Chakra Muladhara</article>
                        <p className="col-p">Positioned at the base of the spine, this chakra is tied to our basic survival instincts, stability, and grounding. It governs our sense of security, physical health, and connection to the Earth. Its color is red.</p>
                    </Col>  
                    <Col lg="3" md="3" className="sec5-col">
                    <div className="img-div-sec4">
                        <img className="chakra-img" src="https://amber-creative-capybara-584.mypinata.cloud/ipfs/QmTeQAPJCuSc5oyJLWsahBVYsvd6ZEG8hFkDksXzoQuVUK/Group%208767.png"/>
                    </div>
                        <article className="col-heading">Sacral Chakra</article>
                        <article className="col-heading">Savdhisthana</article>
                        <p className="col-p">Situated in the lower abdomen, below the navel, this chakra is linked to our emotions, creativity, sensuality, and sexuality. It influences our ability to embrace change, experience pleasure, and nurture relationships. It’s depicted with an orange color.</p>
                    </Col>
                    <Col lg="3" md="3" className="sec5-col">
                    <div className="img-div-sec4">
                        <img className="chakra-img" src="https://amber-creative-capybara-584.mypinata.cloud/ipfs/QmTeQAPJCuSc5oyJLWsahBVYsvd6ZEG8hFkDksXzoQuVUK/Group%208809.png"/>
                    </div>
                        <article className="col-heading">Solar Plexus Chakra</article>
                        <article className="col-heading">Manipura</article>
                        <p className="col-p">Located in the upper abdomen around the stomach area, this chakra corresponds to personal power, self-confidence, and willpower. It drives our sense of purpose, motivation, and assertiveness. Its color is yellow.</p>
                    </Col>
                    <Col lg="3" md="3" className="sec5-col">
                    <div className="img-div-sec4">
                        
                        <img className="chakra-img" src="https://amber-creative-capybara-584.mypinata.cloud/ipfs/QmTeQAPJCuSc5oyJLWsahBVYsvd6ZEG8hFkDksXzoQuVUK/Group%208805.png"/>
                    </div>
                        <article className="col-heading">Heart Chakra</article>
                        <article className="col-heading">Anahata</article>
                        <p className="col-p">Found in the center of the chest, the heart chakra is connected to love, compassion, and emotional well-being. It governs our ability to form healthy relationships, give and receive love, and cultivate empathy. Its color is green.</p>
                    </Col>
                    </Row>
                    <Row>
                    <Col lg="4" md="4">
                    <div className="img-div-sec4">
                        <img className="chakra-img" src="https://amber-creative-capybara-584.mypinata.cloud/ipfs/QmTeQAPJCuSc5oyJLWsahBVYsvd6ZEG8hFkDksXzoQuVUK/Group%208861.png"/>
                    </div>
                        <article className="col-heading">Throat Chakra</article>
                        <article className="col-heading">Vishuddha</article>
                        <p className="col-p">Located in the throat region, this chakra is associated with communication, self-expression, and authenticity. It impacts our ability to express thoughts, ideas, emotions, and to communicate effectively. Its color is blue.</p>
                    </Col>
                    <Col lg="4" md="4">
                    <div className="img-div-sec4">
                        <img className="chakra-img" src="https://amber-creative-capybara-584.mypinata.cloud/ipfs/QmTeQAPJCuSc5oyJLWsahBVYsvd6ZEG8hFkDksXzoQuVUK/Group%208862.png"/>
                    </div>
                        <article className="col-heading">Third Eye Chakra</article>
                        <article className="col-heading">Ajna</article>
                        <p className="col-p">Positioned between the eyebrows on the forehead, the third eye chakra relates to intuition, insight, and inner wisdom. It’s connected to our ability to perceive beyond the physical realm and develop psychic abilities. Its color is indigo.</p>
                    </Col>
                    <Col lg="4" md="4">
                    <div className="img-div-sec4">
                        <img className="chakra-img" src="https://amber-creative-capybara-584.mypinata.cloud/ipfs/QmTeQAPJCuSc5oyJLWsahBVYsvd6ZEG8hFkDksXzoQuVUK/Group%208863.png"/>
                    </div>
                        <article className="col-heading">Crown Chakra</article>
                        <article className="col-heading">Sahasrara</article>
                        <p className="col-p">Found at the top of the head, the crown chakra symbolizes spiritual connection, higher consciousness, and transcendence. It represents our connection to the divine, spiritual awakening, and the integration of our spiritual and physical selves. It is associated with the color violet or white.</p>
                    </Col>
                    </Row>
                </Container>
            </section>
            <section className="img-sec">
                <img src="https://amber-creative-capybara-584.mypinata.cloud/ipfs/QmTeQAPJCuSc5oyJLWsahBVYsvd6ZEG8hFkDksXzoQuVUK/Group%207.png" />
            </section>
            
            <section className="sec5">
                <div className="title">Music Therapy Consultation</div>
                <p className="sec5-p">Music therapy is a powerful form of treatment that utilizes the therapeutic benefits of music to improve an individual’s physical, emotional and cognitive wellbeing. We have developed our Music Therapy tracks as a tool for opening chakras and healing the aura. In addition to chakra opening, music therapy can also help to heal the aura. We use vibrational frequencies produced by instruments like Tibetan singing bowls, tuning forks, gongs, and bells, among others, in our sound healing practice to cleanse and balance the aura, promoting overall physical and mental health.</p>
            </section>

            <section className="sec6 MTQ">
                <p>Explore our music library featuring specially crafted tracks by a healer, designed to connect with your chakras and aura. Enhance your inner peace and well-being with personalized music recommendations based on your chakra analysis. Take a quick 2-minute quiz to discover the perfect tracks that align with your preferences, guiding you to a playlist that brings relaxation and joy to your life.</p>
                <p> Purchase now for only INR 99/- and embark on a transformative musical journey.</p>
                <button onClick={() => setMusicLibraryModalShow(true)}>MUSIC THERAPY QUIZ</button>
            </section>
            <section className="sec7">
                <div className="ask">Would like to enquire further?</div>
                <button className="whatsapp" onClick={openWhatsAppChat}>Get In Touch On WhatsApp</button>
            </section>
        </div>
        <VerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        questions={questions}
        />
        <MusicLibraryModal show={musicLibraryModalShow} onHide={() => setMusicLibraryModalShow(false)}/>
       {/* <FeedbackInputModal
        // show={feedModal}
        // onHide={() => setFeedModal(false)}
        show={modalShow}
        onHide={() => setModalShow(false)}
      /> */}
    </>
    );
    //changes
};

export default ChakraAnalysis;