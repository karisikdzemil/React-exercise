import { useState } from "react";
import Header from "./components/Header";
import Cards from "./components/Cards";
import "./index.css";

function App() {
  const [cartElements, setCartElements] = useState([]);
  function addToCartHandler(event) {
    setCartElements((prevCartElements) => [
      ...prevCartElements,
      {
        name: event.target.closest("li").querySelector("h1").textContent,
        price: event.target.closest("li").querySelector("p").textContent,
      },
    ]);
    console.log(cartElements);
  }

  return (
    <div>
      <Header />
      <Cards addToCart={addToCartHandler} />
    </div>
  );
}

export default App;
