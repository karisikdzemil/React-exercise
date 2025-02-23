import { useState, useRef } from 'react';
import  QUESTIONS  from '../questions.js';

export default function Question(){
    const [question, setQuestion] = useState([]);

    function answerOnQuestionHandler(event){
            setQuestion(prevQuestions => [...prevQuestions, event.target.textContent]);
        }
        const shuffledArray = QUESTIONS[question.length].answers.sort(() => Math.random() - 0.5);
        console.log(shuffledArray)

    return(
        <>
            <div className="questionText">
                <p>{QUESTIONS[question.length].text}</p>
            </div>
            <div className="questionAnswer">
                    <button onClick={answerOnQuestionHandler}>{QUESTIONS[question.length].answers[0]}</button>
            </div>
            <div className="questionAnswer">
                    <button onClick={ answerOnQuestionHandler}>{QUESTIONS[question.length].answers[1]}</button>
            </div>
            <div className="questionAnswer">
                    <button onClick={ answerOnQuestionHandler}>{QUESTIONS[question.length].answers[2]}</button>
            </div>
            <div className="questionAnswer">
                    <button onClick={ answerOnQuestionHandler}>{QUESTIONS[question.length].answers[3]}</button>
            </div>
            </>
    )
}

