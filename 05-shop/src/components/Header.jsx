export default function Header( {showModal} ) {
  return (
    <header className="w-[100%] h-[10vh] border-b-2 border-gray-500 flex items-center justify-around">
      <h1 className="text-3xl w-60 h-15 flex justify-center items-center border-2 border-indigo-500 text-indigo-500">
        DJEMSI SHOP
      </h1>
      <div>
        <input className="w-120 h-[5vh] border-1 border-gray-600 rounded-md pl-5 mr-5" type="text" placeholder="Search for your favorite..." />
        <button className="w-35 p-2 bg-gray-400 text-white rounded-md">Search</button>
      </div>
      <div>
        <button className="text-2xl w-40 h-12 p-2 border-2 border-indigo-500 text-indigo-500">
          Filter
        </button>
        <button onClick={showModal} className="text-2xl w-40 h-12 p-2 border-2 border-indigo-500 text-indigo-500">
          Cart
        </button>
      </div>
    </header>
  );
}
