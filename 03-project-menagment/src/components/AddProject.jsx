import { useRef } from "react";

export default function AddProject({ projectValue, changeModal }) {
  const inpVal = useRef();
  const textValue = useRef();
  const dateValue = useRef();

  return (
    <form className=" absolute w-3/5 h-2/3 mt-20">
      <div className="w-[90%] h-10  my-5 flex gap-3 justify-end">
        <button onClick={()=> changeModal("mainContent")} className="text-gray-800 font-medium hover:bg-gray-500 px-4 py-2 rounded-md ">
          Cancel
        </button>
        <button
          onClick={(event) =>
            projectValue(
              event,
              inpVal.current.value,
              textValue.current.value,
              dateValue.current.value
            )
          }
          className="text-white bg-black  px-6 py-2 rounded-md hover:bg-gray-700 duration-75"
        >
          Save
        </button>
      </div>
      <div className="w-[90%] h-20  my-5">
        <label className="text-gray-600 font-bold">TITLE</label>
        <input
          ref={inpVal}
          type="text"
          className="w-[100%] h-10 mt-3 bg-gray-300 pl-5"
        />
      </div>
      <div className="w-[90%] min-    h-32  my-5">
        <label className="text-gray-600 font-bold" htmlFor="">
          DESCRIPTION
        </label>
        <textarea
          ref={textValue}
          name=""
          id=""
          className="w-[100%] h-20 mt-3 bg-gray-300 pl-5 pt-2"
        ></textarea>
      </div>
      <div className="w-[90%] h-20  my-5">
        <label className="text-gray-600 font-bold" htmlFor="">
          DUE DATE
        </label>
        <input
          ref={dateValue}
          type="date"
          className="w-[100%] h-10 mt-3 bg-gray-300 pl-5 pr-5"
        />
      </div>
      {/* {writeAlert} */}
    </form>
  );
}
