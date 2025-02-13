import { useState } from "react"

import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Result from "./components/Result"

function App() {
  const [investmentObject, setInvestmentObject] = useState([]);

  function getDataFromInput(inputData){
    setInvestmentObject(inputData);
    console.log(investmentObject)
  }
  return (
    <>
    <Header/>
    <UserInput getData={getDataFromInput}/>
    <Result />
    </>
  )
} 

export default App