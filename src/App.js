import { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import RadioButton from "./components/RadioButton";

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
          <InputField
            labelName={"Full name"}
            type="text" name="name" isRequired={true}
            value={formData.name} handleChange={handleChange}
          />
          <InputField
            labelName={"Address"}
            type="text" name="address" /*isRequired={false}*/
            value={formData.address} handleChange={handleChange}
          />
          <InputField
            labelName={"Phone Number"}
            type="tel" name="phone" /*isRequired={false}*/
            value={formData.phone} handleChange={handleChange}
          />
          <InputField
            labelName={"Email"}
            type="email" name="email" /*isRequired={false}*/
            value={formData.email} handleChange={handleChange}
          />
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
            <RadioButton
              name="contact" value="phone"
              handleChange={handleChange}
              isChecked={formData.contact === "phone"}
              message="Phone"
            />
            <RadioButton
              name="contact" value="email"
              handleChange={handleChange}
              isChecked={formData.contact === "email"}
              message="Email"
            />
            <RadioButton
              name="contact" value="post"
              handleChange={handleChange}
              isChecked={formData.contact === "post"}
              message="Slow Mail"
            />
            <RadioButton
              name="contact" value="none"
              handleChange={handleChange}
              isChecked={formData.contact === "none"}
              message="No contact!"
            />
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
