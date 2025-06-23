import { useRef, useState } from "react"

export default function Todo() {
    const [todoList, setTodoList] = useState([]);
    const todoRef = useRef();
    function addTodoHandler () {    
        setTodoList(prev => [...prev, todoRef.current.value])
    }
    return (
        <div className="w-[500px] min-h-[500px] bg-yellow-200 flex flex-col items-center gap-10 p-5">
            <h1>ToDo</h1>
            <div className="flex gap-5">
                <input className="bg-white" ref={todoRef} type="text"/>
                <button className="p-3 bg-blue-500" onClick={addTodoHandler}>Add</button>
            </div>
            <ul>
                {todoList && todoList.map(el => (
                    <li>{el}</li>
                ))}
            </ul>
        </div>
    )
}