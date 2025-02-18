import { useRef } from "react";
export default function SideBar( {changeModal, project, singleClickedLi} ) {

  function showClickedLiHandler(event){
    const clickedEl = project.find(el => (event.target.textContent === el.title));
    singleClickedLi(clickedEl);
    console.log(clickedEl)
    changeModal("addTask");
  }
   
  return (
    <section className="w-[25%] h-[90vh] bg-black mt-[10vh] rounded-tr-lg pt-20 pl-10 pr-10 flex flex-col gap-10 self-center float-left">
      <h1 className="text-gray-200 font-sans text-3xl font-medium">
        YOUR PROJECTS
      </h1>
      <button onClick={()=>changeModal("addProject")} className="bg-stone-700 text-gray-400 py-2 px-4 rounded-md w-40">
        + Add Project
      </button>
      <ul className="text-white flex flex-col gap-5">
         {project.map(el =>(<li onClick={showClickedLiHandler}  key={el.title} className="hover:bg-slate-700 pl-5 py-1 cursor-pointer ">{el.title}</li> ))}
      </ul>
    </section>
  ); 
}
