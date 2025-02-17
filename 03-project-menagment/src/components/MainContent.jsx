
import noProjectsImg from "../assets/no-projects.png"

export default function MainContent(){

    return(
            <div className="w-2/3 h-2/3  m-auto mt-20 p-10 flex flex-col justify-center items-center gap-5">
                <img src={noProjectsImg} className="w-1/6 " alt="" />
                <h1 className="text-center text-gray-700 font-bold text-2xl">No Project Selected</h1>
                <p className="text-center text-gray-500 text-lg">Select a project or get started with a new one</p>
                <button className="bg-stone-800 text-gray-400 py-2 px-4 rounded-md w-50 ">Create new project</button>
            </div>
    )
}