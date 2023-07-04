import {Form, Button, Modal} from 'react-bootstrap';
import "./VerticallyCenteredModal.css";
import React, { useEffect, useState } from 'react';

function VerticallyCenteredModal(props) {
  const [selectedOption, setSelectedOption] = useState('1');
  const options = [1,2,3,4,5,6,7]
  const [question, setQuestion] = useState({quet : '', ans : '', number : 1})

  function next() {
    if(question.ans != '') {

    }
  }

  function handleChange(ans) {
    // setQuestion({ans : ans})
    // document.getElementById('next').disabled = false
    // console.log('question->', question);
  }

  useEffect(() => {
    console.log('questions in modal->', props.questions);
    setQuestion({quet : props.questions[0].quest,ans : '', number : 1})
  }, [props])

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="SOA-modal"
      dialogClassName="modal-90w"
      // aria-labelledby="example-custom-modal-styling-title"
    >
     
      <Modal.Body>
        <div className="title">Chakra Analysis Quiz</div>
        <div className='img-div'>
          <img src="https://amber-creative-capybara-584.mypinata.cloud/ipfs/QmTeQAPJCuSc5oyJLWsahBVYsvd6ZEG8hFkDksXzoQuVUK/Group%208751.png"/>
        </div>
        <div className='Q-div'>Question {question.number}</div>
        <p className='question'>
        {question.quet}
        </p>
        <div className='radio-div'>
            <Form.Check 
                value='1'
                // onchecked={selectedOption === '1'}
                type="radio"
                id={`default-radio-1`}
                label=""
                name="options"
                onChange={handleChange('1')} 
              />
              <Form.Check 
                value='2'
                // checked={selectedOption === '2'}
                type="radio"
                id={`default-radio-2`}
                label=""
                name="options"
                onChange={handleChange('2')}  
              />
              <Form.Check 
                value='3'
                // checked={selectedOption === '3'}
                type="radio"
                id={`default-radio-3`}
                label=""
                name="options"
                onChange={handleChange('3')} 
              />
              <Form.Check 
                value='4'
                // checked={selectedOption === '4'}
                type="radio"
                id={`default-radio-4`}
                label=""
                name="options"
                onChange={handleChange('4')} 
              />
              <Form.Check 
                value='5'
                // checked={selectedOption === '5'}
                type="radio"
                id={`default-radio-5`}
                label=""
                name="options"
                onChange={handleChange('5')} 
              />
              <Form.Check 
                value='6'
                // checked={selectedOption === '6'}
                type="radio"
                id={`default-radio-6`}
                label=""
                name="options"
                onChange={handleChange('6')}
              />
              <Form.Check 
                value='7'
                // checked={selectedOption === '7'}
                type="radio"
                id={`default-radio-7`}
                label=""
                name="options"
                onChange={handleChange('7')} 
              />

            
          </div>
          <div className='radio-div'>
          {
            options.map(opt => (
              <div className='num'>{opt}</div>
            ))
          }
          </div>
          <button id='back'>Back</button>
          <button id='next'>Next</button>
        
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
}

export default VerticallyCenteredModal;