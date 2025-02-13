import "../index.css";

export default function InputFields( {labelValue, inpValue, calculate, fieldName } ){


   return(
        <div>
            <label htmlFor="">{labelValue}</label>
            <input type="number" defaultValue={inpValue} onChange={calculate} name={fieldName}/>
        </div>
   )
}