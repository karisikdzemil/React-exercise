import TabButton from "./TabButton";
import { EXAMPLES } from "./data";
import { useState } from "react";
import Section from "./Section";

export default function Examples(){
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
    return (
        <Section title={"Examples"} className="tabBtn-content">
        <div className="buttons">
            <TabButton className="active" isSelected={selectedTopic === "components"} onSelect={() => handleSelect("components")}>Components</TabButton>
            <TabButton isSelected={selectedTopic === "jsx"} onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === "props"} onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton isSelected={selectedTopic === "state"} onSelect={() => handleSelect("state")}>State</TabButton>
        </div>
            <div className="btnContent">
                {tabContent}
        </div>
    </Section>
    )
}