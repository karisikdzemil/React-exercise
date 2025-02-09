import Header from "./Header";
import TabButton from "./TabButton";
import { CORE_CONCEPTS } from "./data";
import { EXAMPLES } from "./data";
import CoreConcept from "./CoreConcept";
function App() {
    
    let tabContent = "Please select a topic."
    function handleSelect(selectedButton) {
        tabContent = selectedButton;
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
                    <TabButton onSelect={() => handleSelect("components")}>Components</TabButton>
                    <TabButton onSelect={() => handleSelect("jsx")}>JSX</TabButton>
                    <TabButton onSelect={() => handleSelect("props")}>Props</TabButton>
                    <TabButton onSelect={() => handleSelect("state")}>State</TabButton>
                </div>
                    <div className="btnContent">
                        {tabContent}
                    </div>
            </section>
        </div>

        
    )
}

export default App
