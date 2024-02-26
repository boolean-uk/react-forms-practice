import { useState } from "react";
import "./App.css";

export default function App() {
  //TODO: Add your state fields here
  const [formData, setFormData] = useState({
    fullName: "", 
    address: "",
    phone: 0,
    email: "",
    complaint: "",
    contactMethod: "",
    consent: false
  })

  const submitForm = () => {
    console.log("Submitted complaint form with the following information:")
    console.log("Full name: "+formData.name)
    console.log("Address: "+formData.address)
    console.log("Phone number: "+formData.phone)
    console.log("Email address: "+formData.email)
    console.log("Complaint: "+formData.complaint)
    console.log("Contact method: "+formData.contactMethod)
    console.log("Consents: "+formData.consent)
    console.log(formData)
  }

  return (
    <>
      <form className="form">
        <h2>Complaining form!</h2>
        <div className="form__section-left">
          <label>
            Full name
            <input type="text" name="name" required onChange={(e) => setFormData({...formData, fullName: e.target.value})}/>
          </label>
          <label>
            Address
            <input type="text" name="address" onChange={(e) => setFormData({...formData, address: e.target.value})}/>
          </label>
          <label>
            Phone Number
            <input type="tel" name="phone" onChange={(e) => setFormData({...formData, phone: e.target.value})}/>
          </label>

          <label>
            Email
            <input type="email" name="email" onChange={(e) => setFormData({...formData, email: e.target.value})}/>
          </label>
        </div>

        <div className="form__section-right">
          <label>
            Write your complaint
            <textarea
              name="complaint"
              rows="10"
              placeholder="You can complain here"
              onChange={(e) => setFormData({...formData, complaint: e.target.value})}
            ></textarea>
          </label>

          <div className="form__radio-group">
            <p>How do you want to be contacted? </p>
            <label>
              <input type="radio" name="contact" value="phone" onChange={(e) => setFormData({...formData, contactMethod: e.target.value})}/>
              Phone
            </label>

            <label>
              <input type="radio" name="contact" value="email" onChange={(e) => setFormData({...formData, contactMethod: e.target.value})}/>
              Email
            </label>

            <label>
              <input type="radio" name="contact" value="post" onChange={(e) => setFormData({...formData, contactMethod: e.target.value})}/>
              Slow Mail
            </label>

            <label>
              <input type="radio" name="contact" value="none" onChange={(e) => setFormData({...formData, contactMethod: e.target.value})}/>
              No contact!
            </label>
          </div>

          <label>
            I agree you take my data, and do whatever
            <input type="checkbox" name="consent" id="consent" onChange={(e) => setFormData({...formData, consent: e.target.value === "on"})}/>
          </label>
        </div>
        <input type="submit" value="Submit!" onClick={() => submitForm()}/>
      </form>
    </>
  );
}
