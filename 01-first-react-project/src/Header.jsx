import "./style.css";
import headerImg from "./assets/react-core-concepts.png"

export default function Header(){
    function getRandomNum(max){
        return Math.floor(Math.random() * (max + 1));
    }
    let words = ["Fundamental", "Crucial", "Core"];
    return (
       <div className="header">
            <img src={headerImg} alt="" />
            <h1>React Essentials</h1>
            <p>{words[getRandomNum(2)]} React concepts you will need for almost any app you are going to build!</p>
       </div>
    )
}