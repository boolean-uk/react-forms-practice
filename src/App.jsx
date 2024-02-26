import { useState } from "react";
import "./App.css";

export default function App() {
  const [formState, setFormState] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
    complaint: "",
    contact: "",
    consent: false,
  });

  const handleChange = (event) => {
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    setFormState({
      ...formState,
      [event.target.name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
  };

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
              value={formState.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Address
            <input
              type="text"
              name="address"
              value={formState.address}
              onChange={handleChange}
            />
          </label>
          <label>
            Phone Number
            <input
              type="tel"
              name="phone"
              value={formState.phone}
              onChange={handleChange}
            />
          </label>

          <label>
            Email
            <input
              type="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
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
              value={formState.complaint}
              onChange={handleChange}
            ></textarea>
          </label>

          <div className="form__radio-group">
            <p>How do you want to be contacted? </p>
            <label>
              <input
                type="radio"
                name="contact"
                value="phone"
                checked={formState.contact === "phone"}
                onChange={handleChange}
              />
              Phone
            </label>

            <label>
              <input
                type="radio"
                name="contact"
                value="email"
                checked={formState.contact === "email"}
                onChange={handleChange}
              />
              Email
            </label>

            <label>
              <input
                type="radio"
                name="contact"
                value="post"
                checked={formState.contact === "post"}
                onChange={handleChange}
              />
              Slow Mail
            </label>

            <label>
              <input
                type="radio"
                name="contact"
                value="none"
                checked={formState.contact === "none"}
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
              checked={formState.consent}
              onChange={handleChange}
            />
          </label>
        </div>
        <input type="submit" value="Submit!" />
      </form>
    </>
  );
}
