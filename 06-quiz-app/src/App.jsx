import { useState } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import GameOver from "./components/GameOver";
import questions from "./questions";
import {QuizContext} from "./store/quiz-app-context.jsx";

let indexOfQuestion = 0;
function App() {
  const [question, setQuestion] = useState(questions[indexOfQuestion]);
  const [userAnswers, setUserAnswers] = useState([]);

  function nextQuestionHandler(answer){
    setUserAnswers(prevUserAnswers => [...prevUserAnswers, answer]);
    indexOfQuestion++;
    setQuestion(questions[indexOfQuestion]);
    console.log(userAnswers)
    console.log(indexOfQuestion)
  }

  const ctxVal = {
    question
  }

  return (
    <QuizContext.Provider value={ctxVal}>
    <Header />
    {indexOfQuestion !== questions.length ? <Content showQuestion={question} pickAnswer={nextQuestionHandler}/> : <GameOver />}
    </QuizContext.Provider>
  )
}

export default App

// TASK: Prikazi pitanja jedno za drugim. Napravi timer ako korisnik ne odgovori na vreme prebaci na sledece pitanje.
// Napravi mali prelaz kad se klikne na pitanje izmedju postavljanja boje. Na kraju prikazi rezultat.
// Rezultat prikazi u postocima koliko pitanja je korisnik odgovorio tacno koliko netacno i koliko preskocio.