import { useState } from "react";
import "./App.css";

export default function App() {
  
  //TODO: Add your state fields here
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [complaint, setComplaint] = useState('')
  const [contact, setContact] = useState('')
  const [consent, setConsent] = useState('')

  const handleName = (event) => {
    setName(event.target.value)
  }

  const handleAddress = (event) => {
    setAddress(event.target.value)
  }

  const handlePhone = (event) => {
    setPhone(event.target.value)
  }

  const handleEmail = (event) => {
    setEmail(event.target.value)
  }

  const handleComplaint = (event) => {
    setComplaint(event.target.value)
  }

  const handleContact = (event) => {
    setContact(event.target.value)
  }

  const handleConsent = (event) => {
    setConsent(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(name, address, phone, email, complaint, contact, consent)
  }

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h2>Complaining form!</h2>
        <div className="form__section-left">
          <label>
            Full name
            <input type="text" name="name" required value={name} onChange={handleName} />
          </label>
          <label>
            Address
            <input type="text" name="address" value={address} onChange={handleAddress} />
          </label>
          <label>
            Phone Number
            <input type="tel" name="phone" value={phone} onChange={handlePhone}/>
          </label>

          <label>
            Email
            <input type="email" name="email" value={email} onChange={handleEmail}/>
          </label>
        </div>

        <div className="form__section-right">
          <label>
            Write your complaint
            <textarea
              name="complaint"
              rows="10"
              placeholder="You can complain here"
              value={complaint}
              onChange={handleComplaint}
            ></textarea>
          </label>

          <div className="form__radio-group">
            <p>How do you want to be contacted? </p>
            <label>
              <input type="radio" name="contact" value="phone" onChange={handleContact} checked={contact === "phone"} />
              Phone
            </label>

            <label>
              <input type="radio" name="contact" value="email" onChange={handleContact} checked={contact === "email"} />
              Email
            </label>

            <label>
              <input type="radio" name="contact" value="post" onChange={handleContact} checked={contact === "post"} />
              Slow Mail
            </label>

            <label>
              <input type="radio" name="contact" value="none" onChange={handleContact} checked={contact === "none"} />
              No contact!
            </label>
          </div>

          <label>
            I agree you take my data, and do whatever
            <input type="checkbox" name="consent" id="consent" onChange={handleConsent} checked={consent} />
          </label>
        </div>
        <input type="submit" value="Submit!" />
      </form>
    </>
  );
}
