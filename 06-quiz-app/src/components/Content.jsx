import QuestionTimer from "./QuestionTimer";
export default function Content( {showQuestion, pickAnswer } ) {

    const shuffleAnswers = showQuestion.answers.sort(() => Math.random() - 0.5);

  return (
    <div className="w-[50%] h-[60vh] m-auto rounded-md bg-indigo-800 mt-5 flex flex-col">
        <QuestionTimer />
      <div className="w-full h-20">
        <p className="w-full h-full text-center text-2xl p-3 text-indigo-200">
          {showQuestion.text}
        </p>
      </div>
      <ul className="w-full h-[40vh] flex flex-col items-center justify-evenly">
        {shuffleAnswers.map((el) => (
              <li key={el} className="w-4/5 h-16 bg-indigo-500 text-xl p-2 text-center rounded-md text-white">
              <button onClick={() => pickAnswer(el)} className="cursor-pointer w-full h-full">{el}</button>
            </li>
        ))}
      </ul>
    </div>
  );
}
