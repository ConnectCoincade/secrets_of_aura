import {Form, Button, Modal} from 'react-bootstrap';
import "./VerticallyCenteredModal.css";
import React, { useEffect, useState } from 'react';

function VerticallyCenteredModal(props) {
  const options = [1,2,3,4,5,6,7]
  const [question, setQuestion] = useState('')
  const [ans, setAns] = useState('')
  const [number, setNumber] = useState('')
  const [questions, setQuestions] = useState([])
  const [selectedOption, setSelectedOption] = useState(null);
  const [answersList, setAnswerList] = useState([]);
  const [show, setShow] = useState(false);
  var allAnswer = []

  function next() {
    debugger
    let nextButton = document.getElementById('next').textContent
    if(nextButton == 'Submit') {
      props.onHide();
    }
    
    if(number == '7') {
      debugger
      document.getElementById('next').textContent = 'Submit'
    }
    else {
      let answerObj = {
        quest : question,
        ans : ans,
        number, number
      }
      const list = [...answersList, answerObj]
      
      allAnswer = list
      setAnswerList([...answersList, answerObj])
      
      console.log('answersList->', answersList);
      console.log('AllAnswer->', allAnswer);
      console.log('questions here->', questions);
  
      console.log(questions[answersList.length].quest);
  
      if(ans != '') {
        setQuestion(questions[allAnswer.length].quest)
        setNumber(questions[allAnswer.length].number)
      }
  
      var radioButtons = document.getElementsByName('options');
      for (var i = 0; i < radioButtons.length; i++) {
        radioButtons[i].checked = false;
      }
    }

    


  }

  function back() {
    
    if(number != "1") {
      setNumber(number - 1)
      setQuestion(questions[number - 2].quest)
      console.log('answersList in back->', answersList);
      var radioButton = document.getElementById('default-radio-'+ answersList[number - 2].ans);
      radioButton.checked = true;
    }
    debugger
    if(number == '1') {
      props.onHide();
    }

    
    
  }

  function getAnswer(ans) {
    debugger
    setAns(ans);
    console.log('ans->', ans);
    
    answersList.push({
      quest : question,
      ans : ans,
      number, number
    })

    console.log('answersList->', answersList);
  }

  function handleChange(event) {
    setAns(event.target.value);
    // selectedOption(event.target.value)
  }

  useEffect(() => {
    console.log('questions in modal->', props.questions);
    // setQuestion({quet : props.questions[0].quest,ans : '', number : props.questions[0].number})
    setQuestion(props.questions[0].quest)
    setNumber(props.questions[0].number)
    setQuestions(props.questions)
  }, [props])

  return (
    <Modal
      // show={show}
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="SOA-modal"
      // id="SOA-modal"
      dialogClassName="modal-90w"
      // aria-labelledby="example-custom-modal-styling-title"
    >
     
      <Modal.Body>
        <div className="title">Chakra Analysis Quiz</div>
        <div className='img-div'>
          <img src="https://amber-creative-capybara-584.mypinata.cloud/ipfs/QmTeQAPJCuSc5oyJLWsahBVYsvd6ZEG8hFkDksXzoQuVUK/Group%208751.png"/>
        </div>
        <div className='Q-div'>Question {number}</div>
        <p className='question'>
        {question}
        </p>
        <div className='radio-div'>

            <Form.Check 
                value='1'
                // checked={selectedOption == '1'}
                type="radio"
                id={`default-radio-1`}  
                label=""
                name="options"
                className='opt'
                onChange={handleChange} 
              />
              <Form.Check 
                value='2'
                // checked={selectedOption == '2'}
                type="radio"
                className='opt'
                id={`default-radio-2`}
                label=""
                name="options"
                onChange={handleChange}  
              />
              <Form.Check 
                value='3'
                // checked={selectedOption == '3'}
                type="radio"
                className='opt'
                id={`default-radio-3`}
                label=""
                name="options"
                onChange={handleChange}  
              />
              <Form.Check 
                value='4'
                // checked={selectedOption == '4'}
                type="radio"
                className='opt'
                id={`default-radio-4`}
                label=""
                name="options"
                onChange={handleChange} 
              />
              <Form.Check 
                value='5'
                // checked={selectedOption == '5'}
                type="radio"
                className='opt'
                id={`default-radio-5`}
                label=""
                name="options"
                onChange={handleChange} 
              />
              <Form.Check 
                value='6'
                // checked={selectedOption == '6'}
                type="radio"
                className='opt'
                id={`default-radio-6`}
                label=""
                name="options"
                onChange={handleChange} 
              />
              <Form.Check 
                value='7'
                // checked={selectedOption == '7'}
                type="radio"
                className='opt'
                id={`default-radio-7`}
                label=""
                name="options"
                onChange={handleChange} 
              />

            
          </div>
          <div className='radio-div'>
          {
            options.map(opt => (
              <div className='num'>{opt}</div>
            ))
          }
          </div>
          <button id='back' onClick={back}>Back</button>
          <button id='next' onClick={next}>Next</button>
          <Button onClick={props.onHide}>Close</Button>
        
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
}

export default VerticallyCenteredModal;