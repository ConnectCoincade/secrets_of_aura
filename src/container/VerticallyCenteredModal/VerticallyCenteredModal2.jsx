import React from 'react'
import { Form, Button, Modal } from 'react-bootstrap';
import "./VerticallyCenteredModal.css";
import { useEffect, useState } from 'react';
import { useGlobalContext } from '../../context/QuestionContext';
import FeedbackInputModal from './FeedbackInputModal';

function VerticallyCenteredModal2(props) {
  // const [currentQuestion, setCurrentQuestion] = useState('');
  const [feedModal, setFeedModal] = useState(false)
    const options = [1,2,3,4,5,6,7]
  const [questionIndex, setQuestionIndex] = useState(0);
  const { questions, answersList, setAnswerList,exit, setExit } = useGlobalContext();
  // const [currentImage,setCurrentImage] = useState('');
  const currentQuestion = questions[questionIndex];
  
  const handleSubmit = () =>{
    props.onHide();
    setExit(true);

  }

  const handleNext = () => {
    if (questionIndex === questions.length - 1) {
      // If it's the last question, change the "Next" button to "Submit"
      //document.getElementById('next').textContent = 'Submit';
    } else {
      // Otherwise, move to the next question
      setQuestionIndex(nextIndex => nextIndex + 1);
      var radioButtons = document.getElementsByName('options');
      for (var i = 0; i < radioButtons.length; i++) {
        radioButtons[i].checked = false;
      }
    }
  };

  const handleBack = () => {
    if (questionIndex === 0) {
      props.onHide();
    } else {
      // Move to the previous question
      setQuestionIndex(prevIndex => prevIndex - 1);
      //console.log('answersList in back->', answersList);
      var radioButtons = document.getElementsByName('options');
      
      console.log(answersList[questionIndex]?.ans,answersList[answersList.length-2].ans);
      var radioButton = document.getElementById(`default-radio-`+ answersList[1].ans);
      radioButton.checked = true;
    }
  };

  const handleOptionChange = (event) => {
    const selectedAnswer = event.target.value;
    const answerObj = {
      quest: questions[questionIndex].quest,
      ans: selectedAnswer,
      number: questionIndex + 1,
    };
    setAnswerList([...answersList, answerObj]);
  };

  // useEffect(() => {
  //   // Reset the "Next" button text when the component updates
  //   //document.getElementById('next').textContent = 'Next';
  // }, [questionIndex]);

  useEffect(() => {
    // Reset the question index when new questions are received via props
    setQuestionIndex(0);
    // if(answersList){
    //   console.log('answerlist is exist');
    // }
    if( questionIndex+1 < questions.length){
      setAnswerList([])
    } 
  }, [props,questions]);

  if (!questions || questions.length === 0) {
    return null; // Handle the case when there are no questions to display
  }
//   console.log(currentQuestion);

  return (

    (!exit) ?
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="SOA-modal"
      dialogClassName="modal-90w"
    >
      <Modal.Body>
        <div className="title">Chakra Analysis Quiz</div>
        <div className='img-div'>
          <img src={currentQuestion.image} />
        </div>
        <div className='Q-div'>Question {currentQuestion.number}</div>
        <p className='question'>
          {currentQuestion.quest}
        </p>
        <div className='radio-div'>
          {options.map((option, index) => (
            <Form.Check
              key={index}
              value={option}
              type="radio"
              id={`default-radio-${option}`}
              label=""
              name="options"
              className='opt'
              onChange={handleOptionChange}
            />
          ))}
        </div>
        <div className='radio-div'>
          {options.map(opt => (
            <div key={opt} className='num'>{opt}</div>
          ))}
        </div>

        <button id='back' onClick={handleBack}>Back</button>
        { questionIndex < questions.length - 1 ? (
          <button id='next' onClick={handleNext}>Next</button>) :(
          <Button id='next' onClick={handleSubmit}>Submit</Button>)
          }
      </Modal.Body>
    </Modal>
      :
      <FeedbackInputModal
        show={exit}
        onHide={() => setFeedModal(false)}
      /> 
  );
}

export default VerticallyCenteredModal2;