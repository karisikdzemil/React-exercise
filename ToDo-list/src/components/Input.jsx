
import "../index.css";

export default function Input(){


    return(
        <div>
            <input type="text" placeholder="Enter ToDo...?"  className="min-w-100 min-h-10 rounded-sm border-2 border-sky-700 px-5 m-10" />
            <button className="min-w-20 min-h-10 rounded-sm text-white bg-sky-600">Add</button>
        </div>
    )
}