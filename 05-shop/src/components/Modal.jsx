import { useState, useEffect, useRef } from "react";

export default function Modal({ open, close, cartItems }) {
  const dialog = useRef();
  const [cartItemsState, setCartItemsState] = useState(cartItems);

  useEffect(() => {
    setCartItemsState(cartItems);
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [open, cartItems]);

  function removeElFromCartHandler(name) {
    setCartItemsState((prevCartItems) =>
      prevCartItems.filter((el) => el.name !== name)
    );
  }

  const totalPrice = cartItemsState.reduce(
    (sum, item) => sum + Number(item.price),
    0
  );

  const emptyArr = (
    <p className="text-xl mt-10">Cart is empty, add something!!</p>
  );

  return (
    <dialog
      ref={dialog}
      className="w-[30%] h-[40vh] absolute top-[30vh] left-[35%] p-10"
    >
      <ul className="w-full min-h-40">
        {cartItemsState.length === 0 && emptyArr}
        {cartItemsState.map((el, i) => (
          <li
            key={i}
            className="w-full h-8 bg-gray-200 flex items-center justify-between pl-5 rounded-md mt-3"
          >
            <div className="w-full h-8 flex gap-5">
              {el.name}
              <span>{el.price}</span>RSD
            </div>
            <button
              onClick={() => removeElFromCartHandler(el.name)}
              className="w-8 h-8 hover:bg-red-500 hover:text-white rounded-md"
            >
              X
            </button>
          </li>
        ))}
      </ul>
      {totalPrice > 0 && <p className="mt-5">Total price: {totalPrice} RSD</p>}
      <button
        className="p-2 bg-gray-500 text-white rounded-md hover:bg-red-400 mt-5"
        onClick={close}
      >
        Close modal
      </button>
    </dialog>
  );
}