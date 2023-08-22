import { useState } from "react";
import "./App.css";

export default function App() {
  const [formData, setFormData] = useState({
    fullName: '',
    adress: '',
    phoneNumber: '',
    email: '',
    complaint: '',
    contact: '',
    consent: '',
  })
   
  const [consent, setConsent] = useState(false);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target

    if (type === "checkbox" && name === "consent") {
      setConsent(checked)
    }

    setFormData({
      ...formData,
          [name]: value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("formData:", formData);
    console.log("consent:", consent);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Complaining form!</h2>
        <div className="form__section-left">
          <label>
            Full name
            <input
            id="name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            />
          </label>
          <label>
            Address
            <input
            id="adress"
            name="adress"
            value={formData.adress}
            onChange={handleChange}
            />
          </label>
          <label>
            Phone Number
            <input
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            />
          </label>

          <label>
            Email
            <input
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            />
          </label>
        </div>

        <div className="form__section-right">
          <label>
            Write your complaint
            <textarea
            id="complaint"
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
            <input
                id="phone"
                name="contact"
                value="Phone"
                type='radio'
                onChange={handleChange}
                checked={formData.contact === "Phone"}
            />
              Phone
            </label>

            <label>
            <input
                id="email"
                name="contact"
                value="Email"
                type='radio'
                onChange={handleChange}
                checked={formData.contact === "Email"}
            />
              Email
            </label>

            <label>
            <input
                id="slowMail"
                name="contact"
                value="SlowMail"
                type='radio'
                onChange={handleChange}
                checked={formData.contact === "SlowMail"}
            />
              Slow Mail
            </label>

            <label>
            <input
                id="noContact"
                name="contact"
                value="NoContact!"
                type='radio'
                onChange={handleChange}
                checked={formData.contact === "NoContact!"}
            />
              No contact!
            </label>
          </div>

          <label>
            I agree you take my data, and do whatever
            <input
                id="consent"
                name="consent"
                type='checkbox'
                onChange={handleChange}
                checked={consent}
            />
          </label>
        </div>
        <input type="submit" value="Submit!" />
      </form>
    </>
  )
  }
