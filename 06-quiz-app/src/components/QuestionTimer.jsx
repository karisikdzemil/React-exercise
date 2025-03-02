import { useState, useEffect, useRef } from "react"

export default function QuestionTimer(){    
    const [remainingTime, setRemainingTime] = useState(3000)
    const dialog = useRef();
    useEffect(() => {
         setInterval(() => {
        setRemainingTime(prevRemainingTime => prevRemainingTime - 100);
    }, 100);

    setTimeout(() => {
        console.log(dialog.current.value)
    }, 3000)
    }, []);

    return(
        <progress ref={dialog}  className="w-3/6 h-2.5 m-auto " max={3000} value={remainingTime}></progress>
    )
}
