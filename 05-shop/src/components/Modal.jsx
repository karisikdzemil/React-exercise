import { useState, useEffect, useRef } from "react";
export default function Modal({ open, close, cartItems }) {
    const [totalPriceState, setTotalPriceState] = useState(0);
    let totalPrice = 0;
  const dialog = useRef();
  useEffect(() => {
    //   setTotalPriceState(totalPrice);
      if (open) {
          dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [open, totalPrice]);
  function removeElFromCartHandler(event){
    totalPrice -= Number(event.target.closest("li").querySelector("span").textContent);
    setTotalPriceState(prevTotal => prevTotal - Number(event.target.closest("li").querySelector("span").textContent));
    event.target.closest("li").remove();
  }
  const emptyArr = <p className="text-xl mt-10">Cart is empty, add something!!</p>
  
  return (
    <dialog
      ref={dialog}
      className="w-[30%] h-[40vh] absolute top-[30vh] left-[35%] p-10"
    >
      <ul className="w-[100%] min-h-40">
        {cartItems.length === 0 && emptyArr}
      {cartItems.map((el, i) => {
  totalPrice += Number(el.price);
  return (
    <li
      key={i}
      className="w-full h-8 bg-gray-200 flex items-center justify-between pl-5 rounded-md mt-3"
    >
      <div className="w-full h-8 flex gap-5">{el.name} <span>{el.price}</span>  RSD</div>
      
      <button onClick={removeElFromCartHandler} className="w-8 h-8 hover:bg-red-500 hover:text-white rounded-md">
        X
      </button>
    </li>
  );
})}
      </ul>
      {totalPrice > 0 && <p>Total price: {totalPriceState} RSD</p>}
      <button className="p-2 bg-gray-500 text-white rounded-md hover:bg-red-400 mt-5" onClick={close}>Close modal</button>
    </dialog>
  );
}

// Stao sam do azuriranja state za total price kad se ukloni element to nesto ne mogu da napravim