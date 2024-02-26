import { useState } from "react";
import "./App.css";

export default function App() {
  // const [name, setName] = useState("");
  // const [address, setAddress] = useState("");
  // const [number, setNumber] = useState("");
  // const [email, setEmail] = useState("");
  // const [complaint, setComplaint] = useState("");
  // const [contactMethod, setContactMethod] = useState("none");
  // const [consent, setConsent] = useState(false);

  const initial_formdata = {
    name: "",
    address: "",
    phone: "",
    email: "",
    complaint: "",
    contact: "none",
    consent: false,
  };

  const [formData, setFormData] = useState({ ...initial_formdata });
  // const handleNameChange = (event) => setName(event.target.value);
  // const handleAddressChange = (event) => setAddress(event.target.value);
  // const handleNumberChange = (event) => setNumber(event.target.value);
  // const handleEmailChange = (event) => setEmail(event.target.value);
  // const handleComplaintChange = (event) => setComplaint(event.target.value);
  // const handleContactChange = (event) => setContactMethod(event.target.value);
  // const handleConsentChange = (event) => setConsent(event.target.checked);
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log("Name:", name);
    // console.log("Address:", address);
    // console.log("Phone Number:", number);
    // console.log("Email:", email);
    // console.log("Complaint:", complaint);
    // console.log("Contact Method:", contactMethod);
    // console.log("Consent:", consent);
    console.log("Form Data", formData);
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
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Address
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </label>
          <label>
            Phone Number
            <input
              type="tel"
              name="phone"
              value={formData.number}
              onChange={handleChange}
            />
          </label>

          <label>
            Email
            <input
              type="email"
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
                type="radio"
                name="contact"
                value="phone"
                checked={formData.contact === "phone"}
                onChange={handleChange}
              />
              Phone
            </label>

            <label>
              <input
                type="radio"
                name="contact"
                value="email"
                checked={formData.contact === "email"}
                onChange={handleChange}
              />
              Email
            </label>

            <label>
              <input
                type="radio"
                name="contact"
                value="post"
                checked={formData.contact === "post"}
                onChange={handleChange}
              />
              Slow Mail
            </label>

            <label>
              <input
                type="radio"
                name="contact"
                value="none"
                checked={formData.contact === "none"}
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
              checked={formData.consent}
              onChange={handleChange}
            />
          </label>
        </div>
        <input type="submit" value="Submit!" />
      </form>
    </>
  );
}
