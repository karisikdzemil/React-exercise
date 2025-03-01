export default function Content( {showQuestion, pickAnswer } ) {

    const shuffleAnswers = showQuestion.answers.sort(() => Math.random() - 0.5);

  return (
    <div className="w-[50%] h-[55vh] m-auto rounded-md bg-indigo-800 mt-5">
      <div className="w-full h-20">
        <p className="w-full h-full text-center text-2xl p-3 text-indigo-200">
          {showQuestion.text}
        </p>
      </div>
      <ul className="w-full flex flex-col items-center gap-5">
        {shuffleAnswers.map((el) => (
              <li key={el} className="w-4/5 h-16 bg-indigo-500 text-xl p-2 text-center rounded-md text-white">
              <button onClick={() => pickAnswer(el)} className="cursor-pointer w-full h-full">{el}</button>
            </li>
        ))}
      </ul>
    </div>
  );
}
