import InputFields from "./InputFields";
import "../index.css";
import { calculateInvestmentResults } from "../util/investment";

let fieldValues = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};
let isCalled = false;
export default function UserInput({ appArr, getData }) {
    // if(!isCalled){
    //     getData(calculateInvestmentResults(fieldValues));
    //     isCalled = true;
    // }

  function calculateHandler(event) {
    fieldValues[event.target.name] = Number(event.target.value);
    const resultArr = calculateInvestmentResults(fieldValues);
    appArr = resultArr;
    getData(resultArr)
    return resultArr;
  }

  return (
    <section id="user-input" >
      <div className="input-group">
        <InputFields
          labelValue={"INITIAL INVESTMENT"}
          inpValue={10000}
          calculate={calculateHandler}
          fieldName={"initialInvestment"}
        />
        <InputFields
          labelValue={"ANNUAL INVESTMENT"}
          inpValue={1200}
          calculate={calculateHandler}
          fieldName={"annualInvestment"}
        />
      </div>
      <div className="input-group">
        <InputFields
          labelValue={"EXPECTED RETURN"}
          inpValue={6}
          calculate={calculateHandler}
          fieldName={"expectedReturn"}
        />
        <InputFields
          labelValue={"DURATION"}
          inpValue={10}
          calculate={calculateHandler}
          fieldName={"duration"}
        />
      </div>
    </section>
  );
}
