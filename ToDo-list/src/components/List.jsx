
export default function List( {items} ){

    function removeListItemHandler(event){
        event.target.closest("li").remove();
    }


    return(
        <ul className="w-[100%] min-h-[50vh] list-none ">
        <li className="w-10/12 h-10 flex justify-between items-center m-auto mt-5 pl-5 bg-sky-200 border-2 border-indigo-500 rounded-md ">
          Something
          <button className="bg-indigo-600 w-25 h-8 rounded-md text-white text-10 font-bold mr-5">
            Clear
          </button>
        </li>
            {items.map((el, index) => (
                
                <li key={index} className="w-10/12 h-10 flex justify-between items-center m-auto mt-5 pl-5 bg-sky-200 border-2 border-indigo-500 rounded-md ">
                {el}
                <button onClick={removeListItemHandler} className="bg-indigo-600 w-25 h-8 rounded-md text-white text-10 font-bold mr-5">
                  Clear
                </button>
              </li>
            ))}
      </ul>
    )
}   