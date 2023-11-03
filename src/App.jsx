import { useState } from "react";
import "./App.css";

export default function App() {
  // State variables: 
  //const [fullName, setName] = useState("")
  const [Address, setAddress] = useState("")
  const [Phone, setPhone] = useState("")
  const [Email, setEmail] = useState("")
  const [Complaint, setComplaint] = useState("")
  const [contactChoice, setChoice] = useState("")
  const [Consent, setAgree] = useState(false)

  // One state variable for all data: 
  const [formData, setFormData] = useState({
    fullName: '', 
    Address: '',
    Phone: '',
    Email: '',
    Complaint: '',
    contactChoice: '',
    Consent: false
  })

  // One function to update all variables: 
  const handleChange = (event) => {
    const { name, type } = event.target
    //console.log("name: ",event.target.name)
    //console.log("type:", type)
    setFormData({
      ...formData, 
      [name]: event.target[type === 'checkbox' ? 'checked' : 'value']
    })
  }

  // Submit form
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("Name:", formData.fullName,
    "\nAddress:", formData.Address,
    "\nPhone:", formData.Phone, 
    "\nEmail:", formData.Email, 
    "\nComplaint:", formData.Complaint,
    "\nContact choice:", formData.contactChoice,
    "\nConsent:", formData.Consent)
  }


  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h2>Complaining form!</h2>
        <div className="form__section-left">
          <label>
            Full name
            <input type="text" name="fullName" required value={formData.fullName} onChange={handleChange}/>
          </label>
          <label>
            Address
            <input type="text" name="Address" onChange={handleChange}/>
          </label>
          <label>
            Phone Number
            <input type="tel" name="Phone" onChange={handleChange}/>
          </label>

          <label>
            Email
            <input type="email" name="Email" onChange={handleChange}/>
          </label>
        </div>

        <div className="form__section-right">
          <label>
            Write your complaint
            <textarea
              name="Complaint"
              rows="10"
              placeholder="You can complain here"
              onChange={handleChange}
            ></textarea>
          </label>

          <div className="form__radio-group">
            <p>How do you want to be contacted? </p>
            <label>
              <input type="radio" name="contactChoice" value="phone" onChange={handleChange}/>
              Phone
            </label>

            <label>
              <input type="radio" name="contactChoice" value="email" onChange={handleChange}/>
              Email
            </label>

            <label>
              <input type="radio" name="contactChoice" value="post" onChange={handleChange}/>
              Slow Mail
            </label>

            <label>
              <input type="radio" name="contactChoice" value="none" onChange={handleChange}/>
              No contact!
            </label>
          </div>

          <label>
            I agree you take my data, and do whatever
            <input type="checkbox" name="Consent" id="consent" checked={formData.Consent} onChange={handleChange}/>
          </label>
        </div>
        <input type="submit" value="Submit!"/>
      </form>
    </>
  );
}
