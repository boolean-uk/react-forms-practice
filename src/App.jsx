import { useState } from "react";
import "./App.css";

export default function App() {

  const [userData, setUserData] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
    complaint: "",
    phoneRadio: false,
    emailRadio: false,
    postRadio: false,
    noneRadio: false,
    terms: false,
    })

  //TODO: Add your state fields here

  function handleChange(event) {
    const inputValue = event.target.value
    const inputName = event.target.name
    const inputType = event.target.type

    if (inputName === "name") {

      setUserData({...userData, name: inputValue});

    } else if (inputName === "address") {

      setUserData({...userData, address: inputValue});

    } else if (inputName === "phone") {

      setUserData({...userData, phone: inputValue});

    } else if (inputName === "email") {

      setUserData({...userData, email: inputValue});

    } else if (inputName === "complaint") {

      setUserData({...userData, complaint: inputValue})

    } else if (inputType === "radio" && inputValue === "phone") {

      setUserData({...userData, phoneRadio: event.target.checked})

    } else if (inputType === "radio" && inputValue === "email") {

      setUserData({...userData, emailRadio: event.target.checked})

    } else if (inputType === "radio" && inputValue === "post") {

      setUserData({...userData, postRadio: event.target.checked})

    } else if (inputType === "radio" && inputValue === "none") {

      setUserData({...userData, noneRadio: event.target.checked})

    } else if (inputType === "checkbox" && inputName === "consent") {

      setUserData({...userData, terms: event.target.checked})

    }

  }

    function handleSubmit(event) {
      event.preventDefault();

      console.log("Form submitted:", { userData });

      setUserData({
        name: "",
        address: "",
        phone: "",
        email: "",
        complaint: "",
        phoneRadio: false,
        emailRadio: false,
        postRadio: false,
        noneRadio: false,
        terms: false,
      });
    }

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h2>Complaining form!</h2>
        <div className="form__section-left">
          <label>
            Full name
            <input
              type="text"
              name="name"
              required
              onChange={handleChange}
              value={userData.name}
            />
          </label>
          <label>
            Address
            <input
              type="text"
              name="address"
              onChange={handleChange}
              value={userData.address}
            />
          </label>
          <label>
            Phone Number
            <input
              type="tel"
              name="phone"
              onChange={handleChange}
              value={userData.phone}
            />
          </label>

          <label>
            Email
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={userData.email}
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
              onChange={handleChange}
              value={userData.complaint}
            ></textarea>
          </label>

          <div className="form__radio-group">
            <p>How do you want to be contacted? </p>
            <label>
              <input
                type="radio"
                name="contact"
                value="phone"
                checked={userData.phoneRadio}
                onChange={handleChange}
              />
              Phone
            </label>

            <label>
              <input
                type="radio"
                name="contact"
                value="email"
                checked={userData.emailRadio}
                onChange={handleChange}
              />
              Email
            </label>

            <label>
              <input
                type="radio"
                name="contact"
                value="post"
                checked={userData.postRadio}
                onChange={handleChange}
              />
              Slow Mail
            </label>

            <label>
              <input
                type="radio"
                name="contact"
                value="none"
                checked={userData.noneRadio}
                onChange={handleChange}
              />
              No contact!
            </label>
          </div>

          <label>
            I agree you take my data, and do whatever
            <input
              type="checkbox"
              name="consent"
              id="consent"
              onChange={handleChange}
              checked={userData.terms}
            />
          </label>
        </div>
        <input type="submit" value="Submit!" />
      </form>
    </>
  );
}
