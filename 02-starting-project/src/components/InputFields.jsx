import { calculateInvestmentResults } from "../util/investment";
import "../index.css";

export default function InputFields( {labelValue, inpValue, calculate } ){

   return(
        <div>
            <label htmlFor="">{labelValue}</label>
            <input type="number" defaultValue={inpValue} onChange={calculate}/>
        </div>
   )
}