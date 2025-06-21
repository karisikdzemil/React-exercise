import "./App.css";
import { Person } from "./Person";

function App() {
  return (
    <>
      <Person name={"Pedro"} age={22} isMarried={false} />
      <Person name={"Colin"} age={24} isMarried={true} />
    </>
  );
}

export default App;
