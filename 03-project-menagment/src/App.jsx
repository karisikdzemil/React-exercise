import { useState } from "react";

import SideBar from "./components/SideBar";
import MainContent from "./components/MainContent";
import AddProject from "./components/AddProject";
import AddTask from "./components/AddTask";
import Wrapper from "./components/Wrapper";

function App() {
  const [modal, setModal] = useState("mainContent");
  const [projects, setProjects] = useState([]);
  const [project, setProject] = useState({});

  function TrueModal(modd) {
    setModal(modd);
  }
  let wrongEnter;
  function projectValue(event, inpTitle, inpText, inpDate) {
    event.preventDefault();
    if (inpTitle === "" || inpText === "" || inpDate === "") {
      wrongEnter = <p className="text-red-600">You must enter all fields!</p>;
    } else {
      let dataObj = {
        title: inpTitle,
        description: inpText,
        date: inpDate,
      };

      setProjects((prev) => [...prev, dataObj]);
      console.log(projects);
      TrueModal("mainContent");
    }
  }
  function clickedLiObj(obj) {
    console.log(obj);
    setProject(obj);
  }
  function removeProject(prj) {
    setProjects(projects.filter((el) => el !== prj));
  }

  return (
    <>
      <SideBar
        changeModal={TrueModal}
        singleClickedLi={clickedLiObj}
        project={projects}
      />
      <Wrapper>
        {modal === "mainContent" && <MainContent changeModal={TrueModal} />}
        {modal === "addProject" && (
          <AddProject projectValue={projectValue} changeModal={TrueModal} />
        )}
        {modal === "addTask" && (
          <AddTask
            showProject={project}
            projectForRemove={removeProject}
            changeModal={TrueModal}
          />
        )}
      </Wrapper>
    </>
  );
}

export default App;
