import { useState } from "react";
import "./App.css";

const INITIAL_FORM_DATA = {
  name: "",
  address: "",
  phone: "",
  email: "",
  complaint: "",
  contact: "No contact!",
  consent: false,
};

export default function App() {
  const [formData, setFormData] = useState({ ...INITIAL_FORM_DATA });

  //const [name, setName] = useState("");
  //const [email, setEmail] = useState("");
  //const [address, setAddress] = useState("");
  //const [phone, setPhone] = useState("");
  //const [complaint, setComplaint] = useState("");
  //const [contanct, setContact] = useState("No contact!");
  //const [consent, setConsent] = useState(false);

  //TODO: Add your state fields here
  const handleInputChange = (event) => {
    const { name, type, value, checked } = event.target;
    console.log("handleInput", name, type, value, checked);

    if (name !== undefined) {
      if (type === "checkbox") {
        setFormData({ ...formData, [name]: checked });
      } else {
        setFormData({ ...formData, [name]: value });
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h2>Complaining form!</h2>
        <div className="form__section-left">
          <label>
            Full name
            <input
              id="name"
              type="text"
              name="name"
              required
              placeholder="your name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Address
            <input
              id="address"
              type="text"
              name="address"
              placeholder="your address"
              value={formData.address}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Phone Number
            <input
              id="phone"
              type="tel"
              name="phone"
              placeholder="your phone number"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </label>

          <label>
            Email
            <input
              id="email"
              type="email"
              name="email"
              placeholder="your email"
              value={formData.email}
              onChange={handleInputChange}
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
              onChange={handleInputChange}
            ></textarea>
          </label>

          <div className="form__radio-group">
            <p>How do you want to be contacted? </p>
            <label>
              <input
                type="radio"
                name="contact"
                value="phone"
                onChange={handleInputChange}
                checked={formData.contact === "phone"}
              />
              Phone
            </label>

            <label>
              <input
                type="radio"
                name="contact"
                value="email"
                onChange={handleInputChange}
                checked={formData.contact === "email"}
              />
              Email
            </label>

            <label>
              <input
                type="radio"
                name="contact"
                value="post"
                onChange={handleInputChange}
                checked={formData.contact === "post"}
              />
              Slow Mail
            </label>

            <label>
              <input
                type="radio"
                name="contact"
                value="none"
                onChange={handleInputChange}
                checked={formData.contact === "none"}
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
              value={formData.consent}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <input type="submit" value="Submit!" />
      </form>
    </>
  );
}
