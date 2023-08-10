import React from 'react';
import { useGlobalContext } from '../../context/QuestionContext';
import {Row, Col,Container, Modal} from 'react-bootstrap';
import Payment from '../Payment/Payment';
import { saveAs } from 'file-saver';



const styles = {
  modal: { padding: "5% 10%", borderRadius: "10px" },
}

const MusicLibrary = (props) => {
 
  const { questions, answersList, setAnswerList,exit, setExit } = useGlobalContext();

  return (
    <>
      <Modal 
    {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="SOA-modal"
      style={styles.modal}
      dialogClassName="modal-90w"
      >
        
        <Modal.Title style={{backgroundColor:'#6D6FA7', height:75,padding:10, color:'#ffffff'}} >Music Library</Modal.Title>
            <Modal.Body>
                
                  {questions.map((quest,index)=>(
                    <Container key={index} style={{margin:20}}>
                    <Row>
                     <Col style={{display:'flex',justifyContent:'space-between', alignItems:'center'}}>
                    <img src={quest.image} />
                    <p>{quest.chakraName}</p>
                    
                    </Col> 
                    <Col style={{width:'30%'}} >
                    ₹99
                    </Col>  
                    <Col>
                      <Payment chakra={quest.chakraName} />
                    </Col>
                    
                </Row>
                </Container>
                  ))}
                    
            </Modal.Body>    
        </Modal>
    </>
  );
}

export default MusicLibrary