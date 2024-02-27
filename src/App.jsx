import { useState } from "react";
import "./App.css";
/* eslint no-unused-vars:0*/

export default function App() {

  //TODO: Add your state fields here
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [complaintMessage, setComplaintMessage] = useState("");
  const [contactOptions, setContactOptions] = useState("");
  const [consentToTermsCheck, setConsentToTermsCheck] = useState(false);

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

 
  function handleSubmit(event) {
    event.preventDefault();
  
    // Validation
    if (!fullName || !address || !phoneNumber || !email ) {
      alert("Please fill in all fields");
      return;
    }
  
    if (!isValidEmail(email)) {
      alert("Please enter a valid email address");
      return;
    }
  
    // If all fields are valid, proceed with submission
    const formData = {
      fullName,
      address,
      phoneNumber,
      email,
      complaintMessage,
      contactOptions,
      consentToTermsCheck,
    };
  
    
    console.log("Form submitted:", formData);
  
    // Optionally, you can reset the form fields after submission
    resetFormFields();
  }
  
  // Function to validate email format
  function isValidEmail(email) {
    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  // Function to reset form fields after submission
  function resetFormFields() {
    setFullName("");
    setAddress("");
    setPhoneNumber("");
    setEmail("");
    setComplaintMessage("");
    setContactOptions("");
    setConsentToTermsCheck(false);
  }


function handleInputData(event) {
  const inputName = event.target.name;
  const inputValue = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

  if (inputName === "name") {
    setFullName({ ...fullName, fullName: inputValue });
  }
  if (inputName === "address") {
    setAddress({ ...address, address: inputValue });
  }
  if (inputName === "phone") {
    setPhoneNumber({ ...phoneNumber, phoneNumber: inputValue });
  }
  if (inputName === "email") {
    setEmail({ ...email, email: inputValue });
  }
  if (inputName === "complaint") {
    setComplaintMessage({
      ...complaintMessage,
      complaintMessage: inputValue,
    });
  }
  if (inputName === "contact") {
    setContactOptions({
      ...contactOptions,
      contactOptions: inputValue,
    });
  }
  if (inputName === "consent" ) {
    setConsentToTermsCheck({
      ...consentToTermsCheck,
    
    });
  }

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
              <input type="radio" name="contact" value="email" />
              Email
            </label>

            <label>
            <input
                type="radio"
                name="contact"
                value="email"
                onChange={handleInputData}
              />
              Slow Mail
            </label>

            <label>
            <input
                type="radio"
                name="contact"
                value="post"
                onChange={handleInputData}
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
              onChange={handleConsentToTermsInput.consentToTermsCheck}
              
            />
          </label>
        </div>
        <input type="submit" value="Submit!" onClick={handleSubmit} />
        <input type="reset" value="  Reset" onClick={resetFormFields} />
      </form>
    </>
  );
}
