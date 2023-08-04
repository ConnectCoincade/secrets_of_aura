import React from 'react'
import { Form, Button, Modal } from 'react-bootstrap';
import "./VerticallyCenteredModal.css";
import { useEffect, useState } from 'react';
import { useGlobalContext } from '../../context/QuestionContext';
import FeedbackInputModal from '../FeedbackInputModal/FeedbackInputModal';

function VerticallyCenteredModal(props) {
 
  const options = [1,2,3,4,5,6,7];
  const [questionIndex, setQuestionIndex] = useState(0);
  const { questions, answersList, setAnswerList,feedbackExit, setFeedbackExit } = useGlobalContext();
  const currentQuestion = questions[questionIndex];
  
  const handleSubmit = () =>{
    props.onHide();
    setFeedbackExit(true);
  }

  const handleNext = () => {
   
      //Move to the next question
      const selectedAnswer = answersList[questionIndex]?.ans || ''

      if(!selectedAnswer){
        alert('Please select the Option')
      }else{
        setQuestionIndex(nextIndex => nextIndex + 1);
      var radioButtons = document.getElementsByName('options');
      for (let i = 0; i < radioButtons.length; i++) {
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
      const selectedAnswer = answersList[questionIndex-1]?.ans || '';
      var radioButtons = document.getElementsByName('options');
      radioButtons.forEach(radioButton => {
        radioButton.checked = radioButton.value === selectedAnswer;
      });
    }
  };

  const handleOptionChange = (event) => {

      const selectedAnswer = event.target.value;
      const answerObj = {
        quest: questions[questionIndex].quest,
        ans: selectedAnswer,
        number: questionIndex + 1,
        image: questions[questionIndex].image,
        chakraName:questions[questionIndex].chakraName
      };
      setAnswerList([...answersList, answerObj]);   
  };

  useEffect(() => {
    // Reset the question index when new questions are received via props
    setQuestionIndex(0);    
    if( questionIndex+1 < questions.length){
      setAnswerList([])
    } 
  }, [props,questions]);


  if (!questions || questions.length === 0) {
    return null; // Handle the case when there are no questions to display
  }
  return (

    (!feedbackExit) ?
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
        show={feedbackExit}
      /> 
  );
}

export default VerticallyCenteredModal;