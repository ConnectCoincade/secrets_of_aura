import React from "react";
import { useState, useContext, useReducer, createContext } from 'react';
import ChakraImg from '../assets/Group8751.png';
import ChakraImg2 from '../assets/Group8767.png';
import ChakraImg3 from '../assets/Group8809.png';
import ChakraImg4 from '../assets/Group8805.png';
import ChakraImg5 from '../assets/Group8861.png';
import ChakraImg6 from '../assets/Group8862.png';
import ChakraImg7 from '../assets/Group8863.png';
import ChakraImg8 from '../assets/Group7.png';



const QuestionContext = React.createContext(null);

const AppProvider = ({children}) =>{


    const queObj = [
        {quest : 'Do you feel a very strong spiritual connect?',ans : '', number : 1,image:ChakraImg,chakraName:"Root Chakra Murladhara"},
        {quest : 'Do you feel you are intuitive?',ans : '', number : 2,image:ChakraImg2,chakraName:"Sacral Chakra Savdhisthana"},
        {quest : 'How good are u at expressing yourself and your feelings?',ans : '', number : 3,image:ChakraImg3,chakraName:"Solar Plexus Chakra Manipura"},
        {quest : 'Are you very sensitive or do you get hurt very often?',ans : '', number : 4,image:ChakraImg4,chakraName:"Heart Chakra Anahata"},
        {quest : 'Do u have any stomach or health related issues? OR Do feel lack of confidence?',ans : '',image:ChakraImg5, number : 5,chakraName:"Throat Chakra Vishuddha"},
        {quest : 'Sexual desire?',ans : '', number : 6, image:ChakraImg6,chakraName:"Third Eye Chakra Ajna"},
        {quest : 'Do u feel secure and stable/balanced in your life?',ans : '', number : 7, image:ChakraImg7,chakraName:"Crown Chakra Sahasrara"}
    ];
    const userDataObj = {
        firstName:'',
        lastName:'',
        email:''
      }
    const [questions, setQuestions] = useState(queObj);
    const [answersList, setAnswerList] = useState([]);
    const [feedbackExit, setFeedbackExit] = useState(false);
    const [userData, setUserData] = useState(userDataObj);

    return <QuestionContext.Provider value={{questions,setQuestions, feedbackExit, setFeedbackExit,userData, setUserData,answersList, setAnswerList}}>{children}</QuestionContext.Provider>
};

const useGlobalContext =()=>{
    return useContext(QuestionContext);
}

export { QuestionContext, AppProvider, useGlobalContext};