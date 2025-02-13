import "../index.css";
import { formatter } from "../util/investment";

export default function Result({ renderingData }) {

  let content = false;
  let investedCapital = '';
  let totalInterest = 0;
  if (renderingData.length > 0) {
    content = true;
    investedCapital = renderingData[0].valueEndOfYear;
    investedCapital = investedCapital - renderingData[0].annualInvestment -renderingData[0].interest;
  }
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest(Year)</th>
          <th>Total Interest</th>
          <th>Investment Capital</th>
        </tr>
      </thead>
      <tbody>
        
      {content &&
        renderingData.map((el, index) => (
            
          <tr key={index}>
            <td>{el.year}</td>
            <td>{formatter.format(el.valueEndOfYear)}</td>
            <td>{formatter.format(el.interest)}</td>
            <td>{formatter.format(totalInterest = totalInterest + el.interest)}</td>
            <td>{formatter.format(investedCapital + (el.annualInvestment * (index + 1)))}</td>
          </tr>
        ))}

      </tbody>
    </table>
  );
}
