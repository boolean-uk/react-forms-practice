import { useState } from "react";
import "./App.css";

export default function App() {
  //TODO: Add your state fields here

  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [complaintMessage, setComplaintMessage] = useState("");
  const [contactOptions, setContactOptions] = useState("");
  const [consentToTermsCheck, setConsentToTermsCheck] = useState(false);

  function handleSubmit(event) {
    console.log(
      `full name: ${fullName},
      address: ${address},
      phone number: ${phoneNumber},
      email: ${email},
      complaint message: ${complaintMessage},
      contact option: ${contactOptions},
      consent to term check: ${consentToTermsCheck}`
    );
    event.preventDefault();
  }

  function handleFullNameInput(event) {
    setFullName(event.target.value);
  }

  function handleAddressInput(event) {
    setAddress(event.target.value);
  }
  function handlePhoneNumberInput(event) {
    setPhoneNumber(event.target.value);
  }
  function handleEmailInput(event) {
    setEmail(event.target.value);
  }
  function handleComplaintInput(event) {
    setComplaintMessage(event.target.value);
  }
  function handleContactOptionInput(event) {
    setContactOptions(event.target.value);
  }
  function handleConsentToTermsInput(event) {
    setConsentToTermsCheck(event.target.value);
  }

  return (
    <>
      <form className="form">
        <h2>Complaining form!</h2>
        <div className="form__section-left">
          <label>
            Full name
            <input
              type="text"
              name="name"
              required
              onChange={handleFullNameInput}
            />
          </label>
          <label>
            Address
            <input type="text" name="address" onChange={handleAddressInput} />
          </label>
          <label>
            Phone Number
            <input type="tel" name="phone" onChange={handlePhoneNumberInput} />
          </label>

          <label>
            Email
            <input type="email" name="email" onChange={handleEmailInput} />
          </label>
        </div>

        <div className="form__section-right">
          <label>
            Write your complaint
            <textarea
              name="complaint"
              rows="10"
              placeholder="You can complain here"
              onChange={handleComplaintInput}
            ></textarea>
          </label>

          <div className="form__radio-group">
            <p>How do you want to be contacted? </p>
            <label>
              <input
                type="radio"
                name="contact"
                value="phone"
                onChange={handleContactOptionInput}
              />
              Phone
            </label>

            <label>
              <input
                type="radio"
                name="contact"
                value="email"
                onChange={handleContactOptionInput}
              />
              Email
            </label>

            <label>
              <input
                type="radio"
                name="contact"
                value="post"
                onChange={handleContactOptionInput}
              />
              Slow Mail
            </label>

            <label>
              <input
                type="radio"
                name="contact"
                value="none"
                onChange={handleContactOptionInput}
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
              onChange={handleConsentToTermsInput}
            />
          </label>
        </div>
        <input type="submit" value="Submit!" onClick={handleSubmit} />
      </form>
    </>
  );
}
