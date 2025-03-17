import { useContext } from "react";
import logoImg from "../assets/logo.jpg";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";
import ProgressContext from "../store/UserProgressContext";
export default function Header(){
    const cartCtx = useContext(CartContext);
    const progressCtx = useContext(ProgressContext);

    const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
        return totalNumberOfItems += item.quantity;
    } , 0);
    return(
        <header id="main-header">
            <div id="title">
                <img src={logoImg} alt="React logo." />
                <h1>ReactFood</h1>
            </div>
            <Button textBtn onClick={() => progressCtx.showCart()}>Cart ({totalCartItems})</Button>
        </header>
    )
}