import { useState, useEffect, useRef } from "react"

export default function QuestionTimer( {timerFunc} ){    
    const [remainingTime, setRemainingTime] = useState(3000)
    const dialog = useRef();
    useEffect(() => {
         const interval = setInterval(() => {
        setRemainingTime(prevRemainingTime => prevRemainingTime - 100);
        console.log("radi")
    }, 100);

    const timeout = setTimeout(() => {
        console.log(dialog.current.value);
        timerFunc([]);
        console.log("timeout");
        clearInterval(interval)
        setRemainingTime(3000);
    }, 3000)

    return () => {
        clearInterval(interval);
        clearTimeout(timeout)
    }
    }, [timerFunc]);


    return(
        <progress ref={dialog}  className="w-3/6 h-2.5 m-auto " max={3000} value={remainingTime}></progress>
    )
}
// TREBA DA SE VIDE OVI INTERVALI I OVO