import { useRef } from "react";

export default function Cards( {addToCart, cardsElements} ) {
    const productName = useRef();
    const productPrice = useRef();


    return (
        <ul className="w-[100%] min-h-[90vh] px-16 flex flex-wrap gap-[20px] justify-center p-5">
            {cardsElements.map((el, i) => (
                 <li key={i} className="w-60 h-[35vh] bg-white flex flex-col items-center drop-shadow-xl pb-5">
                 <img className="w-[100%] h-[20vh]" src={el.imageUrl} alt="" />
                 <h1 ref={productName} className="font-bold p-2 text-xl">{el.name}</h1>
                 <p ref={productPrice} className="">Cena: <span>{el.price}</span> RSD</p>
                 <button onClick={addToCart} className="w-30 h-10 mt-2 border-2 border-gray-700 text-gray-700 hover:bg-gray-300 rounded-md">Add to cart</button>
             </li>
            ))}
        </ul>
    )
}