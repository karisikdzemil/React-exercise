import { useState } from "react";
import Header from "./Header";
import TabButton from "./TabButton";
import { CORE_CONCEPTS } from "./data";
import { EXAMPLES } from "./data";
import CoreConcept from "./CoreConcept";
import "./style.css"
function App() {
    const [selectedTopic, setSelectedTopic] = useState();


    let tabContent = "Please select a topic."
    function handleSelect(selectedButton) {
        setSelectedTopic(selectedButton);
        console.log(selectedTopic)
    }

    if(selectedTopic){
        tabContent = (
            <div className="tabContentDiv">
                <h1>{EXAMPLES[selectedTopic].title}</h1>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
            </div>
        )
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
                    <TabButton className="active" isSelected={selectedTopic === "components"} onSelect={() => handleSelect("components")}>Components</TabButton>
                    <TabButton isSelected={selectedTopic === "jsx"} onSelect={() => handleSelect("jsx")}>JSX</TabButton>
                    <TabButton isSelected={selectedTopic === "props"} onSelect={() => handleSelect("props")}>Props</TabButton>
                    <TabButton isSelected={selectedTopic === "state"} onSelect={() => handleSelect("state")}>State</TabButton>
                </div>
                    <div className="btnContent">
                        {tabContent}
                </div>
            </section>
        </div>

        
    )
}

export default App
