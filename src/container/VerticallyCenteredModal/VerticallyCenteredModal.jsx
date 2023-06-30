import {Form, Button, Modal} from 'react-bootstrap';
import "./VerticallyCenteredModal.css"

function VerticallyCenteredModal(props) {
  const options = [1,2,3,4,5,6,7]
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
        <div className='Q-div'>Question 1</div>
        <p className='question'>
        Do u feel a very strong spiritual connect?
        </p>
        <div>
          {
            options.map(opt => (
              <Form.Check 
              type="radio"
              id="default-radio"
              label=""
            />
            ))
          }
        
        </div>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
}

export default VerticallyCenteredModal;