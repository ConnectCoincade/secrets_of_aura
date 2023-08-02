import React from "react";
import "./FeedbackInputModal.css";
import { useState,useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useGlobalContext } from "../../context/QuestionContext";
import { useReactToPrint } from "react-to-print";


const styles = {
  modal: { padding: "5% 10%", borderRadius: "10px" },
  header: {
    paddingTop: 30,
    fontSize: 45,
  },
  button: {
    width: "80%",
    background: "#9389E3 0% 0% no-repeat padding-box",
    textTransform: "uppercase",
    border:'2px solid #000000'
  },
  form: { textAlign: "-webkit-center", padding: "3% 14%" },
};


const FeedbackInputModal = () => {
  const {
    userData,
    setUserData,
    exit,
    setExit,
  } = useGlobalContext();

  const handleDownload = () =>{
    setExit(false);
  };
 
  const onInputChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  

  return (
    <> 
      <Modal
        show={exit}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="SOA-modal "
        dialogClassName="modal-90w"
        onHide={() => setExit(false)}
        style={styles.modal}
      >
        <Modal.Title style={styles.header}>Help Us With Your</Modal.Title>

        <Modal.Body>
          <div style={{}}>
            <Form style={styles.form}>
              <Form.Group
                style={{ width: "80%" }}
                className="mb-4"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  onChange={(e) => onInputChange(e)}
                  style={{
                    border: "2px solid",
                    textTransform: "uppercase",
                  }}
                />
              </Form.Group>
              <Form.Group
                style={{ width: "80%" }}
                className="mb-4"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  onChange={(e) => onInputChange(e)}
                  style={{
                    border: "2px solid ",
                    textTransform: "uppercase",
                  }}
                />
              </Form.Group>
              <Form.Group
                style={{ width: "80%" }}
                className="mb-4"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  type="email"
                  placeholder="Email ID"
                  name="email"
                  onChange={(e) => onInputChange(e)}
                  style={{ border: "2px solid " }}
                />
              </Form.Group>
              <Button
                variant="primary"
                style={styles.button}
                onClick={handleDownload}
              >
                Download Report
              </Button>
            </Form>
          </div>
        </Modal.Body>
      </Modal>    
    </>
  );
};


export default FeedbackInputModal;
