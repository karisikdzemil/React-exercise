import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "./data";
import Section from "./Section";
export default function CoreConcepts(){

    return(
         <Section title={"Time to get started!"} className="cards">
                        <ul className="coreConcepts">
                            {CORE_CONCEPTS.map(el => {return <CoreConcept key={el.title} {...el}/>})}
                        </ul>
                    </Section>
    )
}