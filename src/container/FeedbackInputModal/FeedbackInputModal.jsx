import React from "react";
import "./FeedbackInputModal.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useGlobalContext } from "../../context/QuestionContext";

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
  },
  form: { textAlign: "-webkit-center", padding: "3% 14%" },
};

const FeedbackInputModal = (props) => {
  const {
    questions,
    userData,
    setUserData,
    answersList,
    setAnswerList,
    exit,
    setExit,
  } = useGlobalContext();
  const [show, setShow] = useState(exit);
  const handleClose = () => setExit(false);
  // const handleShow = () => setShow(true);

  const onInputChange = (e) => {
    console.log([e.target.name], e.target.value);
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Modal
        show={show}
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
                    border: "2px solid #B00020",
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
                    border: "2px solid #919191",
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
                  style={{ border: "2px solid #9389E3" }}
                />
              </Form.Group>
              <Button
                variant="primary"
                style={styles.button}
                onClick={handleClose}
              >
                Send Report
              </Button>
            </Form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default FeedbackInputModal;
