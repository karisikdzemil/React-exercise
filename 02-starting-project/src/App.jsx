import { useState } from "react"

import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Result from "./components/Result"

function App() {
  const [investmentObject, setInvestmentObject] = useState([]);

  function getDataFromInput(inputData){
    setInvestmentObject(inputData);
  }
  return (
    <>
    <Header/>
    <UserInput getData={getDataFromInput}/>
    <Result renderingData={investmentObject}/>
    </>
  )
} 

export default App