import { useState } from "react";
import Header from "./components/Header";
import Cards from "./components/Cards";
import Modal from "./components/Modal";
import { shopItems } from "./dummyData.js";
import "./index.css";

function App() {
  const [cartElements, setCartElements] = useState([]);
  const [openModal, setOpenModal] = useState(false); 
  const [cards, setCards] = useState(shopItems);


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

  function searchDataHandler(searchedData){
    setCards(searchedData)
  }
  return (
    <div>
      <Modal open={openModal} close={showModalHandler} cartItems={cartElements}/>
      <Header showModal={showModalHandler} shareData={searchDataHandler}/>
      <Cards addToCart={addToCartHandler} cardsElements={cards}/>
    </div>
  );
}

export default App;
