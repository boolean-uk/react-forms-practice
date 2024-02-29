import { useState } from "react";
import "./App.css";

const initData = {
  name: "", 
  address: "", 
  phone: "", 
  email: "", 
  complaint: "", 
  contact: "",
  consent: false

}

export default function App() {

  const [userData, setUserData] = useState(initData);

  const handleChange = (event) => {
    const name = event.target.name 
    const value = event.target.value 
    const type = event.target.type 

    if (name === "name") {
      setUserData({...userData, name: value})
    }
    if (name === "address") {
      setUserData({...userData, address: value})
    }
    if (name === "phone") {
      setUserData({...userData, phone: value})
    }
    if (name === "email") {
      setUserData({...userData, email: value})
    }
    if (name === "complaint") {
      setUserData({...userData, complaint: value})
    }
    if (name === "contact") {
      setUserData({...userData, contact: value})
    }
    if (type === "checkbox" && name === "consent") {
      setUserData({ ...userData, consent: event.target.checked });
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    console.log("Submitted: ", userData)
    setUserData(initData)
  }

  console.log(userData)

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h2>Complaining form!</h2>
        <div className="form__section-left">
          <label htmlFor="name">
            Full name
            <input 
              type="text" 
              name="name"
              onChange={handleChange} 
            />
          </label>
          <label htmlFor="address">
            Address
            <input 
              type="text" 
              name="address" 
              onChange={handleChange} 
            />
          </label>
          <label htmlFor="phone">
            Phone Number
            <input 
              type="tel" 
              name="phone" 
              onChange={handleChange} 
            />
          </label>

          <label htmlFor="email">
            Email
            <input 
              type="email" 
              name="email" 
              onChange={handleChange} 
            />
          </label>
        </div>

        <div className="form__section-right">
          <label htmlFor="complaint">
            Write your complaint
            <textarea
              name="complaint"
              rows="10"
              placeholder="You can complain here"
              onChange={handleChange} 
            ></textarea>
          </label>

          <div className="form__radio-group">
            <p>How do you want to be contacted? </p>
            <label >
              <input 
                type="radio" 
                name="contact" 
                value="phone" 
                onChange={handleChange}
                checked={userData.contact === "phone"}
              />
              Phone
            </label>

            <label>
              <input 
                type="radio" 
                name="contact" 
                value="email" 
                onChange={handleChange}
                checked={userData.contact === "email"}
              />
              Email
            </label>

            <label>
              <input 
                type="radio" 
                name="contact" 
                value="post" 
                onChange={handleChange}
                checked={userData.contact === "post"}
              />
              Slow Mail
            </label>

            <label>
              <input 
                type="radio" 
                name="contact" 
                value="none" 
                onChange={handleChange}
                checked={userData.contact === "none"}
              />
              No contact!
            </label>
          </div>

          <label htmlFor="consent">
            I agree you take my data, and do whatever
            <input 
              type="checkbox" 
              name="consent" 
              id="consent" 
              onChange={handleChange}
              checked={userData.consent}
            />
          </label>
        </div>
        <input 
          type="submit" 
          value="Submit!" 
        />
      </form>
    </>
  );
}
