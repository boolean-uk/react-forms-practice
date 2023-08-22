import { useState } from "react";
import "./App.css";

export default function App() {
  
  const [formData, setFormData] = useState({})

  const handleChange = (event) => {
    const {name, value} = event.target
    setFormData({
      ...formData,
      [name]: value
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
            <input type="text" name="name" required onChange={handleChange} />
          </label>
          <label>
            Address
            <input type="text" name="address" onChange={handleChange} />
          </label>
          <label>
            Phone Number
            <input type="tel" name="phone" onChange={handleChange} />
          </label>
          <label>
            Email
            <input type="email" name="email" onChange={handleChange} />
          </label>
        </div>

        <div className="form__section-right">
          <label>
            Write your complaint
            <textarea
              name="complaint"
              rows="10"
              placeholder="You can complain here"
              onChange={handleChange}
            ></textarea>
          </label>

          <div className="form__radio-group" onChange={handleChange}>
            <p>How do you want to be contacted? </p>
            <label>
              <input type="radio" name="contact" value="phone" />
              Phone
            </label>

            <label>
              <input type="radio" name="contact" value="email" />
              Email
            </label>

            <label>
              <input type="radio" name="contact" value="post" />
              Slow Mail
            </label>

            <label>
              <input type="radio" name="contact" value="none" />
              No contact!
            </label>
          </div>

          <label>
            I agree you take my data, and do whatever
            <input type="checkbox" name="consent" id="consent" onChange={(event) => handleChange({target:{name: event.target.name, value: event.target.checked}})}/>
          </label>
        </div>
        <input type="submit" value="Submit!"/>
      </form>
    </>
  );
}
