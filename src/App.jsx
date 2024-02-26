import { useState } from "react";
import "./App.css";

export default function App() {

  //TODO: Add your state fields here
  const [formName, setFormName] = useState("")
  const [formAddress, setFormAddress] = useState("")
  const [formPhone, setFormPhone] = useState("")
  const [formEmail, setFormEmail] = useState("")

  const [formText, setFormText] = useState("")
  const [formRadioPhone, setFormRadioPhone] = useState(false)
  const [formRadioEmail, setFormRadioEmail] = useState(false)
  const [formRadioSlow, setFormRadioSlow] = useState(false)
  const [formRadioNo, setFormRadioNo] = useState(false)
  const [formCheckbox, setFormCheckbox] = useState("")


  const handleSubmit = (event) =>
  {
    event.preventDefault();
  };

  const handleInputChange = (event) =>
  {
    const { name, type, value, checked } = event.target;
    console.log("Input changed: " + value);
    
    if (type === "radio")
    {
      if (value === "phone")
        setFormRadioPhone(!formRadioPhone);

      else if (value === "email")
        setFormRadioEmail(!formRadioEmail);

      else if (value === "post")
        setFormRadioSlow(!formRadioSlow);

      else if (value === "none")
        setFormRadioNo(!formRadioNo);
    }
    else if (type === "checkbox")
    {
      setFormCheckbox(!formCheckbox)
    }
    else
    {
      if (name === "name")
        setFormName(value);

      else if (name === "address")
        setFormAddress(value);

      else if (name === "phone")
        setFormPhone(value);

      else if (name === "email")
        setFormEmail(value);

      else if (name === "complaint")
        setFormText(value)
    }
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h2>Complaining form!</h2>
        <div className="form__section-left">
          <label>
            Full name
            <input type="text" name="name" required value={formName} onChange={handleInputChange}/>
          </label>
          <label>
            Address
            <input type="text" name="address" value={formAddress} onChange={handleInputChange} />
          </label>
          <label>
            Phone Number
            <input type="tel" name="phone" value={formPhone} onChange={handleInputChange} />
          </label>

          <label>
            Email
            <input type="email" name="email" value={formEmail} onChange={handleInputChange} />
          </label>
        </div>

        <div className="form__section-right">
          <label>
            Write your complaint
            <textarea
              name="complaint"
              rows="10"
              placeholder="You can complain here"
              value={formText}
              onChange={handleInputChange}
            ></textarea>
          </label>

          <div className="form__radio-group">
            <p>How do you want to be contacted? </p>
            <label>
              <input type="radio" name="contact" value="phone" checked={formRadioPhone} onChange={handleInputChange} />
              Phone
            </label>

            <label>
              <input type="radio" name="contact" value="email" checked={formRadioEmail} onChange={handleInputChange} />
              Email
            </label>

            <label>
              <input type="radio" name="contact" value="post" checked={formRadioSlow} onChange={handleInputChange} />
              Slow Mail
            </label>

            <label>
              <input type="radio" name="contact" value="none" checked={formRadioNo} onChange={handleInputChange} />
              No contact!
            </label>
          </div>

          <label>
            I agree you take my data, and do whatever
            <input type="checkbox" name="consent" id="consent" checked={formCheckbox} onChange={handleInputChange} />
          </label>
        </div>
        <input type="submit" value="Submit!" />
      </form>
    </>
  );
}
