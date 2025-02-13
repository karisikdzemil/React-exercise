import InputFields from "./InputFields";
import "../index.css";
import { calculateInvestmentResults } from "../util/investment";

let fieldValues = {
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  };

export default function UserInput() {

  function calculateHandler(event) {

    fieldValues[event.target.name] = Number(event.target.value);
    console.log(fieldValues)
    const resultObj = calculateInvestmentResults(fieldValues);
    console.log(resultObj);
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <InputFields
          labelValue={"INITIAL INVESTMENT"}
          inpValue={10000}
          calculate={calculateHandler}
          fieldName={"initialInvestment"}
        />
        <InputFields labelValue={"ANNUAL INVESTMENT"} inpValue={1200} calculate={calculateHandler} fieldName={"annualInvestment"}/>
      </div>
      <div className="input-group">
        <InputFields labelValue={"EXPECTED RETURN"} inpValue={6} calculate={calculateHandler} fieldName={"expectedReturn"}/>
        <InputFields labelValue={"DURATION"} inpValue={10} calculate={calculateHandler} fieldName={"duration"}/>
      </div>
    </section>
  );
}
