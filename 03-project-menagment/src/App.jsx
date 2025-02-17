import { useState } from "react";

import SideBar from "./components/SideBar";
import MainContent from "./components/MainContent";
import AddProject from "./components/AddProject";
import Wrapper from "./components/Wrapper";

function App() {
  
  const [modal, setModal] = useState("mainContent");

  function TrueModal(modd){
    setModal(modd)
  }

  return (
    <>
    <SideBar changeModal={TrueModal}/>
      <Wrapper>
     {modal === "mainContent" &&  <MainContent />}
     {modal === "addProject" &&  <AddProject />}
    
      </Wrapper>
   
    </>
  );
}

export default App;
