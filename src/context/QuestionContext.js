import React from "react";
import { useState, useContext, useReducer, createContext } from 'react';
import { initialState, reducer } from "./useReducer";


const QuestionContext = React.createContext(null);

const AppProvider = ({children}) =>{


    const queObj = [
        {quest : 'Do you feel a very strong spiritual connect?',ans : '', number : 1,image:"https://amber-creative-capybara-584.mypinata.cloud/ipfs/QmTeQAPJCuSc5oyJLWsahBVYsvd6ZEG8hFkDksXzoQuVUK/Group%208863.png",chakraName:"Root Chakra Murladhara"},
        {quest : 'Do you feel you are intuitive?',ans : '', number : 2,image:"https://amber-creative-capybara-584.mypinata.cloud/ipfs/QmTeQAPJCuSc5oyJLWsahBVYsvd6ZEG8hFkDksXzoQuVUK/Group%208862.png",chakraName:"Sacral Chakra Savdhisthana"},
        {quest : 'How good are u at expressing yourself and your feelings?',ans : '', number : 3,image:"https://amber-creative-capybara-584.mypinata.cloud/ipfs/QmTeQAPJCuSc5oyJLWsahBVYsvd6ZEG8hFkDksXzoQuVUK/Group%208861.png",chakraName:"Solar Plexus Chakra Manipura"},
        {quest : 'Are you very sensitive or do you get hurt very often?',ans : '', number : 4,image:"https://amber-creative-capybara-584.mypinata.cloud/ipfs/QmTeQAPJCuSc5oyJLWsahBVYsvd6ZEG8hFkDksXzoQuVUK/Group%208805.png",chakraName:"Heart Chakra Anahata"},
        {quest : 'Do u have any stomach or health related issues? OR Do feel lack of confidence?',ans : '',image:"https://amber-creative-capybara-584.mypinata.cloud/ipfs/QmTeQAPJCuSc5oyJLWsahBVYsvd6ZEG8hFkDksXzoQuVUK/Group%208809.png", number : 5,chakraName:"Throat Chakra Vishuddha"},
        {quest : 'Sexual desire?',ans : '', number : 6, image:"https://amber-creative-capybara-584.mypinata.cloud/ipfs/QmTeQAPJCuSc5oyJLWsahBVYsvd6ZEG8hFkDksXzoQuVUK/Group%208767.png",chakraName:"Third Eye Chakra Ajna"},
        {quest : 'Do u feel secure and stable/balanced in your life?',ans : '', number : 7, image:"https://amber-creative-capybara-584.mypinata.cloud/ipfs/QmTeQAPJCuSc5oyJLWsahBVYsvd6ZEG8hFkDksXzoQuVUK/Group%208751.png",chakraName:"Crown Chakra Sahasrara"}
    ];
    const userDataObj = {
        firstName:'',
        lastName:'',
        email:''
      }

    const [state, dispatch] = useReducer(reducer, initialState)

    const [questions, setQuestions] = useState(queObj);
    const [answersList, setAnswerList] = useState([]);
    const [exit, setExit] = useState(false);
    const [userData, setUserData] = useState(userDataObj);

    return <QuestionContext.Provider value={{questions,setQuestions, exit, setExit,userData, setUserData, state, dispatch,answersList, setAnswerList}}>{children}</QuestionContext.Provider>
};

const useGlobalContext =()=>{
    return useContext(QuestionContext);
}

export { QuestionContext, AppProvider, useGlobalContext};