import { useState } from "react";
import Header from "./components/Header";
import Cards from "./components/Cards";
import Modal from "./components/Modal";
import "./index.css";

function App() {
  const [cartElements, setCartElements] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  function addToCartHandler(event) {
    setCartElements((prevCartElements) => [
      ...prevCartElements,
      {
        name: event.target.closest("li").querySelector("h1").textContent,
        price: event.target.closest("li").querySelector("span").textContent,
      },
    ]);
    console.log(cartElements);
  }

  function showModalHandler(){  
    setOpenModal(prevOpenState => !prevOpenState);
  }

  return (
    <div>
      <Modal open={openModal} close={showModalHandler} cartItems={cartElements}/>
      <Header showModal={showModalHandler}/>
      <Cards addToCart={addToCartHandler} />
    </div>
  );
}

export default App;
