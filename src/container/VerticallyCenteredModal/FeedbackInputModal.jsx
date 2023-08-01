import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useGlobalContext } from '../../context/QuestionContext';

const FeedbackInputModal = (props) => {
 
  const { questions, answersList, setAnswerList,exit, setExit } = useGlobalContext();
  const [show, setShow] = useState(exit);
  const handleClose = () => setExit(false);
  const handleShow = () => setShow(true);
  

  return (
    <>
      <Modal
      show={show}     
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="SOA-modal"
      dialogClassName="modal-90w"
      onHide={()=>setExit(false)}
      >
        
          <Modal.Title>Help Us With Your</Modal.Title>
       
        <Modal.Body>
          <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
             
              <Form.Control
                type="text"
                placeholder="First Name"
                style={{border:'2px solid #B00020',textTransform:'uppercase'}}
              />
            </Form.Group>
               <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              
              <Form.Control
                type="text"
                placeholder="Last Name"
                style={{border:'2px solid #919191',textTransform:'uppercase'}}
              />
            </Form.Group>
               <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
             
              <Form.Control
                type="email"
                placeholder="Email ID"
                style={{border:'2px solid #9389E3',textTransform:'uppercase'}}
            
              />
            </Form.Group>
            <Button variant="primary" style={{width:'100%',background:'#9389E3 0% 0% no-repeat padding-box',textTransform:'uppercase'}} onClick={handleClose}>
            Send Report
            </Button>
            
          </Form>
        </Modal.Body>
        
       
        
      </Modal>
    </>
  );
}

export default FeedbackInputModal