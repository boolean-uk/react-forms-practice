import { useState } from "react";
import "./App.css";

export default function App() {
  //TODO: Add your state fields here
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState("");
  const [complaint, setComplaint] = useState("");
  const [contact, setContact] = useState();
  const [consent, setConsent] = useState(false);

  const handleNameChange = (event) => {
    // Description: Handles updates to the name in the form and updates that state
    // Input: event
    const { name, type, value, checked } = event.target;
    console.log("handleNameChange", name, type, value, checked);
    // Load the value of the input from event
    const inputValue = event.target.value;
    // Update the state using setName(inputValue)
    setName(inputValue);
  };

  const handleAddressChange = (event) => {
    // Description: Handles updates to the address in the form and updates that state
    // Input: event
    // Load the value of the input from event
    const inputValue = event.target.value;
    // Update the state using setAddress(inputValue)
    setAddress(inputValue);
  };

  const handlePhoneChange = (event) => {
    const inputValue = event.target.value;
    setPhone(inputValue);
  };
  const handleEmailChange = (event) => {
    const inputValue = event.target.value;
    setEmail(inputValue);
  };
  const handleComplaintChange = (event) => {
    const inputValue = event.target.value;
    setComplaint(inputValue);
  };
  const handleContactChange = (event) => {
    const inputValue = event.target.value;
    setContact(inputValue);
  };
  const handleConsentChange = (event) => {
    const { name, type, value, checked } = event.target;
    console.log("handleConsentChange", name, type, value, checked);
    const inputValue = event.target.value;
    setConsent(inputValue);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Name: " + name);
    console.log("Address: " + address);
    console.log("Phone: " + phone);
    console.log("Email: " + email);
    console.log("Complaint: " + complaint);
    console.log("Contact: " + contact);
    console.log("Consent: " + consent);
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
              onChange={handleNameChange}
              value={name}
            />
          </label>
          <label>
            Address
            <input type="text" name="address" onChange={handleAddressChange} />
          </label>
          <label>
            Phone Number
            <input type="tel" name="phone" onChange={handlePhoneChange} />
          </label>

          <label>
            Email
            <input type="email" name="email" onChange={handleEmailChange} />
          </label>
        </div>

        <div className="form__section-right">
          <label>
            Write your complaint
            <textarea
              name="complaint"
              rows="10"
              placeholder="You can complain here"
              onChange={handleComplaintChange}
            ></textarea>
          </label>

          <div className="form__radio-group">
            <p>How do you want to be contacted? </p>
            <label>
              <input
                type="radio"
                name="contact"
                value="phone"
                onChange={handleContactChange}
              />
              Phone
            </label>

            <label>
              <input
                type="radio"
                name="contact"
                value="email"
                onChange={handleContactChange}
              />
              Email
            </label>

            <label>
              <input
                type="radio"
                name="contact"
                value="post"
                onChange={handleContactChange}
              />
              Slow Mail
            </label>

            <label>
              <input
                type="radio"
                name="contact"
                value="none"
                onChange={handleContactChange}
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
              onChange={handleConsentChange}
            />
          </label>
        </div>
        <input type="submit" value="Submit!" />
      </form>
    </>
  );
}
