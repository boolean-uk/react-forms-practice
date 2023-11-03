import { useState } from "react";
import "./App.css";

export default function App() {
  // State variables: 
  const [fullName, setName] = useState("")
  const [Address, setAddress] = useState("")
  const [Phone, setPhone] = useState("")
  const [Email, setEmail] = useState("")
  const [Complaint, setComplaint] = useState("")
  const [contactChoice, setChoice] = useState("")
  const [Consent, setAgree] = useState(false)

  const handleName = (event) => {
    //console.log(event.target.value)
    setName(event.target.value)
  }

  const handleAddress = (event) => {
    //console.log(event.target.value)
    setAddress(event.target.value)
  }
  
  const handlePhone = (event) => {
    //console.log(event.target.value)
    setPhone(event.target.value)
  }

  const handleEmail = (event) => {
    setEmail(event.target.value)
  }

  const handleComplaint = (event) => {
    setComplaint(event.target.value)
  }

  const handleContact = (event) => {
    setChoice(event.target.value)
  }

  const handleConsent = (event) => {
    //console.log(event.target.checked)
    setAgree(event.target.checked)
  }

  // Submit form
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("Name:", fullName,
    "\nAddress:", Address,
    "\nPhone:", Phone, 
    "\nEmail:", Email, 
    "\nComplaint:", Complaint,
    "\nContact choice:", contactChoice,
    "\nConsent:", Consent)
  }


  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h2>Complaining form!</h2>
        <div className="form__section-left">
          <label>
            Full name
            <input type="text" name="name" required value={fullName} onChange={handleName}/>
          </label>
          <label>
            Address
            <input type="text" name="address" onChange={handleAddress}/>
          </label>
          <label>
            Phone Number
            <input type="tel" name="phone" onChange={handlePhone}/>
          </label>

          <label>
            Email
            <input type="email" name="email" onChange={handleEmail}/>
          </label>
        </div>

        <div className="form__section-right">
          <label>
            Write your complaint
            <textarea
              name="complaint"
              rows="10"
              placeholder="You can complain here"
              onChange={handleComplaint}
            ></textarea>
          </label>

          <div className="form__radio-group">
            <p>How do you want to be contacted? </p>
            <label>
              <input type="radio" name="contact" value="phone" onChange={handleContact}/>
              Phone
            </label>

            <label>
              <input type="radio" name="contact" value="email" onChange={handleContact}/>
              Email
            </label>

            <label>
              <input type="radio" name="contact" value="post" onChange={handleContact}/>
              Slow Mail
            </label>

            <label>
              <input type="radio" name="contact" value="none" onChange={handleContact}/>
              No contact!
            </label>
          </div>

          <label>
            I agree you take my data, and do whatever
            <input type="checkbox" name="consent" id="consent" checked={Consent} onChange={handleConsent}/>
          </label>
        </div>
        <input type="submit" value="Submit!"/>
      </form>
    </>
  );
}
