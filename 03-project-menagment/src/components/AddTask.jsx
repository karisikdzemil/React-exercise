import { useRef, useState } from "react";

export default function AddTask( {showProject, projectForRemove, changeModal} ) {
  const [tasks, setTasks] = useState([]);
  const inputValue = useRef();
  const [projectFromSide, setProjectFromSide] = useState(showProject);

  if(showProject !== projectFromSide){
    setProjectFromSide(showProject); 
  }

  function showLiHandler() {
    const inpVal = inputValue.current.value;
    if(inputValue.current.value === ''){
        return;
    }
    setTasks((prevTasks) => [...prevTasks, inpVal]);
    inputValue.current.value = '';
  }
  function removeTaskHandler(event){
    event.target.closest("li").remove()
  } 
  function deleteProjectHandler(){
    projectForRemove(projectFromSide);
    setProjectFromSide({});
    changeModal("mainContent")
  }

  return (
    <div className="min-h-4/5  m-auto mt-20 p-10 flex flex-col justify-center items-center gap-5">
      <div className="w-[100%] h-[40%]  border-b-4 pb-16">
        <button onClick={deleteProjectHandler} className="text-gray-800 font-medium hover:bg-gray-500 px-4 py-2 rounded-md float-right">
          Delete
        </button>
        <h1 className=" text-gray-700 font-bold text-4xl mb-5">
          {projectFromSide.title}
        </h1>
        <p className="text-gray-500 font-medium text-1xl mb-5">{projectFromSide.date}</p>
        <p className="font-medium text-1xl text-gray-600">
            {projectFromSide.description}
        </p>
      </div>

      <div className="w-[100%] min-h-[50%] border-collapse">
        <h1 className=" text-gray-700 font-bold text-4xl mb-5">Tasks</h1>
        <input
          ref={inputValue}
          className=" w-72 px-4 py-2 bg-gray-300 active:to-blue-700 mb-5"
          type="text"
        />
        <button
          onClick={showLiHandler}
          className="text-gray-800 font-medium hover:bg-gray-500 px-4 py-2 rounded-md ml-5"
        >
          Add Task
        </button>
        <ul className="min-30%">
          {tasks.map((el, i) => (
            <li key={i} onClick={removeTaskHandler} className=" bg-gray-300 w-3/4 p-2 flex flex-row justify-between items-center">
              <span>{el}</span>{" "}
              <button className="text-gray-800 font-medium py-2 rounded-md ml-5">
                Clear
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
