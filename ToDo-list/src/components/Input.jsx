
import "../index.css";

export default function Input( {passingFunction } ){

    function inputValueHandler(event){
        let proba = event.target.closest("div");
        const input = proba.querySelector("input").value;
        if(input === ''){
            alert("You must enter something!");
        }else{
            return input;
        }
    }
    return(
        <div>
            <input type="text" placeholder="Enter ToDo...?"  className="min-w-100 min-h-10 rounded-sm border-2 border-sky-700 px-5 m-10" />
            <button onClick={()=>inputValueHandler(passingFunction)} className="min-w-20 min-h-10 rounded-sm text-white bg-sky-600">Add</button>
        </div>
    )
}