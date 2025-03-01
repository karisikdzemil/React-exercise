
export default function Header(){

    return(
        <div className="w-[100%] h-[25vh] flex flex-col items-center gap-5 p-5 ">
            <img className="w-[10%] bg-transparent rounded-[50%]" src="quiz-header-image.png" alt="" />
            <h1 className="text-5xl text-indigo-200 font-bold">Quiz App</h1>
        </div>
    )
}