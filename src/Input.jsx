import { useState } from "react"
import Textarea from "./Textarea"
import Radio from "./Radio"
import Checkbox from "./Checkbox"

/* eslint-disable react/prop-types */

export default function Input() {
    const [inputs, setInputs] = useState({name:"",
address:"",
phone:"",
email:"",
complaint:"",
contact:"",
consent:false})
    
    function handleChange(e) {
        e.currentTarget.name === "consent" ? inputs[e.currentTarget.name] = e.currentTarget.checked : inputs[e.currentTarget.name] = e.currentTarget.value
        setInputs({...inputs})
    }

    return (
        
        
        <form className="form">
            <h2>Complaining form!</h2>
            <div className="form__section-left">
                <label>
                    Full name
                    <input type="text" name="name" onChange={(e) => {handleChange(e)}} value={inputs.name} required />
                </label>
                <label>
                    Address
                    <input type="text" name="address" onChange={(e) => {handleChange(e)}} value={inputs.address}/>
                </label>
                <label>
                    Phone Number
                    <input type="tel" name="phone" onChange={(e) => {handleChange(e)}} value={inputs.phone}/>
                </label>

                <label>
                    Email
                    <input type="email" name="email" onChange={(e) => {handleChange(e)}} value={inputs.email}/>
                </label>
            </div>

            <div className="form__section-right">
                <Textarea handleChange={handleChange} inputs={inputs}/>

                <Radio handleChange={handleChange}/>

                <Checkbox handleChange={handleChange}/>
            </div>
            <input type="submit" value="Submit!" />
        </form>
    )
}
