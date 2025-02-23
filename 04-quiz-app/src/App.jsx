
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Question from "./components/Question";
import "./index.css";

function App() {

return(
  <section id="main">
    <Header />
    <Wrapper>

    <Question />
    </Wrapper>
  </section>
)
}

export default App

// TASK: Prikazi pitanja jedno za drugim. Napravi timer ako korisnik ne odgovori na vreme prebaci na sledece pitanje.
// Napravi mali prelaz kad se klikne na pitanje izmedju postavljanja boje. Na kraju prikazi rezultat.
// Rezultat prikazi u postocima koliko pitanja je korisnik odgovorio tacno koliko netacno i koliko preskocio.