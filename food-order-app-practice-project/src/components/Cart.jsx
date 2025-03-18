import { useContext } from "react";
import Button from "./UI/Button";
import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";
import ProgressContext from "../store/UserProgressContext";
import { currencyFormatter } from "./util/formatting";
import CartItem from "./CartItem";
export default function Cart() {
  const cartCtx = useContext(CartContext);
  const progressCtx = useContext(ProgressContext);

  const sumForPay = cartCtx.items.reduce(
    (value, item) => value + item.price * item.quantity,
    0
  );

  function handleCloseCart() {
    progressCtx.hideCart();
  }
  // function handleIncrease(){
  //     cartCtx.addItem()
  // }
  // function handleDecrease(){
  //     cartCtx.removeItem()
  // }

  return (
    <Modal open={progressCtx.progress === "cart"} className="cart">
      <ul>
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            increase={() => cartCtx.addItem(item)}
            decrease={() => cartCtx.removeItem(item.id)}
          />
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(sumForPay)}</p>
      <p className="modal-actions">
        <Button textBtn onClick={handleCloseCart}>
          Close
        </Button>
        <Button onClick={handleCloseCart}>Go to Checkout</Button>
      </p>
    </Modal>
  );
}
