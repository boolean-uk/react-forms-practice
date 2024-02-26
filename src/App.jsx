import { useState } from "react";
import "./App.css";

export default function App() {

  //TODO: Add your state fields here
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [text, setText] = useState('')
  const [contactMethod, setContactMethod] = useState(null)
  const [agree, setAgree] = useState(false)

  const logResults = () => {
    console.log(`Name:${name}, Address: ${address}, Phone: ${phone}, Email: ${email}, Text: ${text}, Contact method: ${contactMethod}, Agrees to stuff: ${agree}`)
  }
  
  return (
    <>
      <form className="form">
        <h2>Complaining form!</h2>
        <div className="form__section-left">
          <label>
            Full name
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label>
            Address
            <input
              type="text"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </label>
          <label>
            Phone Number
            <input
              type="tel"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>

        <div className="form__section-right">
          <label>
            Write your complaint
            <textarea
              name="complaint"
              rows="10"
              placeholder="You can complain here"
              value={text}
              onChange={e => setText(e.target.value)}
            ></textarea>
          </label>
          <div className="form__radio-group">
            <p>How do you want to be contacted? </p>
            <label>
              <input type="radio" name="contact" value="phone" onChange={e => setContactMethod(e.target.value)}/>
              Phone
            </label>

            <label>
              <input type="radio" name="contact" value="email" onChange={e => setContactMethod(e.target.value)}/>
              Email
            </label>

            <label>
              <input type="radio" name="contact" value="post" onChange={e => setContactMethod(e.target.value)}/>
              Slow Mail
            </label>

            <label>
              <input type="radio" name="contact" value="none" onChange={e => setContactMethod(e.target.value)}/>
              No contact!
            </label>
          </div>

          <label>
            I agree you take my data, and do whatever
            <input type="checkbox" name="consent" id="consent" onChange={e => setAgree(e.target.value)}/>
          </label>
        </div>
        <input type="submit" value="Submit!" onClick={logResults}/>
      </form>
    </>
  );
}
