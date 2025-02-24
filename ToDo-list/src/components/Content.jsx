import { useState, useRef } from "react";
import List from "./List";

export default function Content() {
    const [listItems, setListItems] = useState([]);
    const inputVal = useRef();
    function postTodoHandler(){
        const currentValue = inputVal.current.value;
        if(inputVal.current.value !== ''){
            setListItems(prevItems => [...prevItems, currentValue]);
            inputVal.current.value = '';
        }


    }
  return (
    <div className="w-[50%] min-h-[60vh] bg-white rounded-md flex flex-col justify-center align-center">
      <div className=" my-10 flex justify-center gap-10">
        <input
          ref={inputVal}
          type="text"
          placeholder="Enter something..."
          className="w-4/6 h-10 rounded-sm pl-5 border-3 border-indigo-400 "
        />
        <button onClick={postTodoHandler} className="bg-indigo-600 w-20 h-10 rounded-md text-white text-10 font-bold">
          Add
        </button>
      </div>
        <List items={listItems}/>
    </div>
  );
}
