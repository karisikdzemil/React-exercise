import Header from "./Header";
import TabButton from "./TabButton";
import { CORE_CONCEPTS } from "./data";
import CoreConcept from "./CoreConcept";
function App() {

    function getCards (){
        CORE_CONCEPTS.map(el => {
            const li = `<li>
                </img src={el.src}>
                <h1>{el.title}</h1>
                <p>el.desription</p>
            </li>
            `;
            document.getElementById("proba").append(li)
        })
    }

    return(
        <div>
            <Header />
            <section className="cards">
                <h1>Time to get started!</h1>
                <ul className="coreConcepts">
                    {CORE_CONCEPTS.map(el => {return <CoreConcept {...el}/>})}
                </ul>
            </section>
            <section className="tabBtn-content">
                <h1>Examples</h1>
                <div className="buttons">
                    <TabButton children={"Components"}/>
                    <TabButton children={"JSX"}/>
                    <TabButton children={"Props"}/>
                    <TabButton children={"State"}/>

                </div>
                    <div className="btnContent"></div>
            </section>
        </div>

        
    )
}

export default App
