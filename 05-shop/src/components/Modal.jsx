import { useEffect, useRef } from "react"
export default function Modal( {open, close, cartItems} ){    
    const dialog = useRef();
        useEffect(() => {
            if(open){
                dialog.current.showModal();
            }else{
                dialog.current.close();
            }
        }, [open])
    return(
        <dialog ref={dialog} className="w-[30%] h-[40vh] absolute top-[30vh] left-[35%] p-10">
            <ul className="w-[100%] min-h-60">
                <li className="w-[100%] h-8 bg-gray-200 flex items-center justify-between pl-5 rounded-md mt-3">some element <button className="w-8 h-8 hover:bg-red-500 hover:text-white rounded-md">X</button></li>
                <li className="w-[100%] h-8 bg-gray-200 flex items-center justify-between pl-5 rounded-md mt-3">some element <button className="w-8 h-8 hover:bg-red-500 hover:text-white rounded-md">X</button></li>
                <li className="w-[100%] h-8 bg-gray-200 flex items-center justify-between pl-5 rounded-md mt-3">some element <button className="w-8 h-8 hover:bg-red-500 hover:text-white rounded-md">X</button></li>
            </ul>
            <button onClick={close}>Close modal</button>
        </dialog>
    )
}