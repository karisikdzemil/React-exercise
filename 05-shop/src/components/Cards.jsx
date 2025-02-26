
import { shopItems } from "../dummyData.js";

export default function Cards() {
    console.log(shopItems)
    return (
        <ul className="w-[100%] min-h-[90vh] px-16 flex flex-wrap gap-[20px] justify-center p-5">
            {shopItems.map((el, i) => (
                 <li key={i} className="w-60 h-[35vh] bg-white flex flex-col items-center drop-shadow-xl pb-5">
                 <img className="w-[100%] h-[20vh]" src={el.imageUrl} alt="" />
                 <h1 className="font-bold p-2 text-xl">{el.name}</h1>
                 <p className="">Cena: {el.price} RSD</p>
                 <button className="w-30 h-10 mt-2 border-2 border-gray-700 text-gray-700 hover:bg-red-500 rounded-md">Buy</button>
             </li>
            ))}
        </ul>
    )
}