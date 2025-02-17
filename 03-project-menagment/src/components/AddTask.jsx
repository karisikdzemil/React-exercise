
export default function AddTask(){

    return(
        <div className="h-4/5  m-auto mt-20 p-10 flex flex-col justify-center items-center gap-5 bg-red-600">
            <div className="w-[100%] h-[40%] bg-green-500 border-b">
                <button className="text-gray-800 font-medium hover:bg-gray-500 px-4 py-2 rounded-md float-right">Delete</button>
                <h1 className=" text-gray-700 font-bold text-4xl mb-5">Learning React</h1>
                <p className="text-gray-500 font-medium text-1xl mb-5">
                    Dec, 29. 24
                </p>
                <p className="font-medium text-1xl ">
                    Kako si majko kako si oce kako je tamo vrememeeee
                </p>
            </div>

            <div className="w-[100%] h-[50%] bg-green-500 border-collapse">
            <h1 className=" text-gray-700 font-bold text-4xl mb-5">Tasks</h1>
                <input className=" w-72 px-4 py-2 bg-gray-300 active:to-blue-700" type="text" />
                <button className="text-gray-800 font-medium hover:bg-gray-500 px-4 py-2 rounded-md ml-5">Add Task</button>
                <ul>
                    <li><span>Kako si majko kako si oce</span> <button></button></li>
                </ul>
            </div>
        </div>
    )
}