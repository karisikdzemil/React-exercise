import headerImg from "../assets/quiz-logo.png";

export default function Header() {

    return (
        <div id="header">
            <img src={headerImg} alt="" />
            <h1>REACTQUIZ</h1>
        </div>
    )
}