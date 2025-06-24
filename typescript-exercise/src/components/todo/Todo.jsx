import { useRef, useState } from "react"

export default function Todo() {
    const [todoList, setTodoList] = useState([]);
    const todoRef = useRef();
    function addTodoHandler () {    
        setTodoList(prev => [...prev, todoRef.current.value])
    }
    return (
        <div className="w-[500px] min-h-[500px] bg-yellow-200 flex flex-col items-center gap-8 p-6 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800">ToDo</h1>
      
        <div className="flex gap-4 w-full">
          <input
            ref={todoRef}
            type="text"
            placeholder="Enter a task"
            className="flex-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={addTodoHandler}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
          >
            Add
          </button>
        </div>
      
        <ul className="w-full flex flex-col gap-2">
          {todoList && todoList.map((el, idx) => (
            <li
              key={idx}
              className="bg-white p-2 rounded-md shadow-sm border border-gray-200"
            >
              {el}
            </li>
          ))}
        </ul>
      </div>
      
    )
}