import logoImg from "../assets/logo.jpg";
import Button from "./UI/Button";
export default function Header(){
    return(
        <header id="main-header">
            <div id="title">
                <img src={logoImg} alt="React logo." />
                <h1>ReactFood</h1>
            </div>
            <Button textBtn>Cart (0)</Button>
        </header>
    )
}