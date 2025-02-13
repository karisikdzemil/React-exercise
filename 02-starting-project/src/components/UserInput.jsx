import InputFields from "./InputFields";
import "../index.css";
// import InputFields from "./InputFields";

export default function UserInput( { children } ){

    function calculateHandler(event){
        let fieldValues = {
            initialInvestment: 10000,
            annualInvestment: 1200, 
            expectedReturn: 6,
            duration: 10
        }
        console.log(event.target.value)
    }
    
    return(
       <section id="user-input">
            <div className="input-group">
                <InputFields labelValue={'INITIAL INVESTMENT'}  inpValue={10000} calculate={calculateHandler}/>
                <InputFields labelValue={'ANNUAL INVESTMENT'} inpValue={1200}/>
            </div>
            <div className="input-group">
            <InputFields labelValue={'EXPECTED RETURN'} inpValue={6}/>
            <InputFields labelValue={'DURATION'} inpValue={10}/>
            </div>
       </section>
    )
}