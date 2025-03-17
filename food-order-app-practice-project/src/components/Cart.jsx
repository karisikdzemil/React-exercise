import { useContext } from "react"
import Button from "./UI/Button"
import Modal from "./UI/Modal"
import CartContext from "../store/CartContext"
import ProgressContext from "../store/UserProgressContext";
export default function Cart(){
    const cartCtx = useContext(CartContext);
    const progressCtx = useContext(ProgressContext);

    const sumForPay = cartCtx.items.reduce((value, item) => {
        return value + item.price * item.quantity;
    }, 0)

    return (
        <Modal open={progressCtx.progress === 'cart'}>
            <ul>
                {cartCtx.items.map((item) => (
                    <li key={item.id}>{item.name} - {item.quantity}</li>
                ))}
            </ul>  
            <p>{sumForPay}</p>
            <p>
                <Button textBtn>Close</Button>
                <Button>Checkout</Button>
            </p>
        </Modal>
    )
}