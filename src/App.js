import { useState } from "react";
import "./App.css";

export default function App() {
  
  // Add your state fields here
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    email: '',
    complaint: '',
    contact: '',
    consent: false
  })

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target
    const data = type === "checkbox" ? checked : value
    setFormData({
      ...formData,
      [name]: data
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(formData)
  }

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h2>Complaining form!</h2>
        <div className="form__section-left">
          <label>
            Full name
            <input type="text" name="name" required value={formData.name} onChange={handleChange} />
          </label>
          <label>
            Address
            <input type="text" name="address" value={formData.address} onChange={handleChange} />
          </label>
          <label>
            Phone Number
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange}/>
          </label>

          <label>
            Email
            <input type="email" name="email" value={formData.email} onChange={handleChange}/>
          </label>
        </div>

        <div className="form__section-right">
          <label>
            Write your complaint
            <textarea
              name="complaint"
              rows="10"
              placeholder="You can complain here"
              value={formData.complaint}
              onChange={handleChange}
            ></textarea>
          </label>

          <div className="form__radio-group">
            <p>How do you want to be contacted? </p>
            <label>
              <input type="radio" name="contact" value="phone" onChange={handleChange} checked={formData.contact === "phone"} />
              Phone
            </label>

            <label>
              <input type="radio" name="contact" value="email" onChange={handleChange} checked={formData.contact === "email"} />
              Email
            </label>

            <label>
              <input type="radio" name="contact" value="post" onChange={handleChange} checked={formData.contact === "post"} />
              Slow Mail
            </label>

            <label>
              <input type="radio" name="contact" value="none" onChange={handleChange} checked={formData.contact === "none"} />
              No contact!
            </label>
          </div>

          <label>
            I agree you take my data, and do whatever
            <input type="checkbox" name="consent" id="consent" onChange={handleChange} checked={formData.consent} />
          </label>
        </div>
        <input type="submit" value="Submit!" />
      </form>
    </>
  );
}
