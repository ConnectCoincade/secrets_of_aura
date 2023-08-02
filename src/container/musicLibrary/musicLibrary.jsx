import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import Modal from 'react-bootstrap/Modal';
import { useGlobalContext } from '../../context/QuestionContext';
import {Row, Col,Container, Modal} from 'react-bootstrap';

const MusicLibrary = (props) => {
 
  const { questions, answersList, setAnswerList,exit, setExit } = useGlobalContext();
  const [show, setShow] = useState(exit);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

  return (
    <>
      <Modal 
    //   show={show}
    {...props}
     
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="SOA-modal"
      // id="SOA-modal"
      dialogClassName="modal-90w"
      >
        
        <Modal.Title>Music Library</Modal.Title>
            <Modal.Body>
                <Container>
                    <Row>
                        <Col>
                        Root Chakra Muladhara 
                        </Col>
                        <Col>
                          <button>Buy</button> 
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>    
        </Modal>
    </>
  );
}

export default MusicLibrary