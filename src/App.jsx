import { useState } from "react";
import "./App.css";

export default function App() {
  const defaultForm = {
    name: '',
    address: '',
    phone: '',
    email: '',
    complaint: '',
    contact: '',
    consent: false
  };

  const [complaint, setComplaint] = useState(defaultForm);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("name: ", complaint.name);
    console.log("email: ", complaint.email);
    console.log("address: ", complaint.address);
    console.log("phone: ", complaint.phone);
    console.log("complaint: ", complaint.complaint);
    console.log("consent: ", complaint.consent);
    setComplaint(defaultForm); 
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setComplaint({...complaint, [name]: newValue});
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
              value={complaint.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Address
            <input
              type="text"
              name="address"
              value={complaint.address}
              onChange={handleChange}
            />
          </label>
          <label>
            Phone Number
            <input
              type="tel"
              name="phone"
              value={complaint.phone}
              onChange={handleChange}
            />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              value={complaint.email}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="form__section-right">
          <label>
            Write your complaint
            <textarea
              name="complaint"
              value={complaint.complaint}
              onChange={handleChange}
              rows="10"
              placeholder="You can complain here"
            ></textarea>
          </label>
          <div className="form__radio-group">
            <p>How do you want to be contacted? </p>
            <label>
              <input
                type="radio"
                name="contact"
                value="phone"
                checked={complaint.contact === "phone"}
                onChange={handleChange}
              />
              Phone
            </label>
            <label>
              <input
                type="radio"
                name="contact"
                value="email"
                checked={complaint.contact === "email"}
                onChange={handleChange}
              />
              Email
            </label>
            <label>
              <input
                type="radio"
                name="contact"
                value="post"
                checked={complaint.contact === "post"}
                onChange={handleChange}
              />
              Slow Mail
            </label>
            <label>
              <input
                type="radio"
                name="contact"
                value="none"
                checked={complaint.contact === "none"}
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
              checked={complaint.consent}
              onChange={handleChange}
            />
          </label>
        </div>
        <input type="submit" value="Submit!" />
      </form>
      <div></div>
    </>
  );
}
