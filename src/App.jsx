import { useState } from "react";
import "./App.css";

export default function App() {
  //TODO: Add your state fields here

  /*
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [complaintMessage, setComplaintMessage] = useState("");
  const [contactOptions, setContactOptions] = useState("");
  const [consentToTermsCheck, setConsentToTermsCheck] = useState(false);
*/

  const [complaintFormData, setComplaintFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
    complaintMessage: "",
    contactOptions: "",
    consentToTermsCheck: false,
  });

  function handleSubmit(event) {
    console.log(
      `full name: ${complaintFormData.fullName},
      address: ${complaintFormData.address},
      phone number: ${complaintFormData.phoneNumber},
      email: ${complaintFormData.email},
      complaint message: ${complaintFormData.complaintMessage},
      contact option: ${complaintFormData.contactOptions},
      consent to term check: ${complaintFormData.consentToTermsCheck}`
    );
    event.preventDefault();
  }

  function handelInputData(event) {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    const inputType = event.target.type;
    const checked = event.target.checked;

    if (inputName === "name") {
      setComplaintFormData({ ...complaintFormData, fullName: inputValue });
    }
    if (inputName === "address") {
      setComplaintFormData({ ...complaintFormData, address: inputValue });
    }
    if (inputName === "phone") {
      setComplaintFormData({ ...complaintFormData, phoneNumber: inputValue });
    }
    if (inputName === "email") {
      setComplaintFormData({ ...complaintFormData, email: inputValue });
    }
    if (inputName === "complaint") {
      setComplaintFormData({
        ...complaintFormData,
        complaintMessage: inputValue,
      });
    }
    if (inputName === "contact") {
      setComplaintFormData({
        ...complaintFormData,
        contactOptions: inputValue,
      });
    }
    if (inputName === "consent" && inputType === "checkbox") {
      setComplaintFormData({
        ...complaintFormData,
        consentToTermsCheck: checked,
      });
    }
  }
  /*
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
  */

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
              onChange={handelInputData}
            />
          </label>
          <label>
            Address
            <input type="text" name="address" onChange={handelInputData} />
          </label>
          <label>
            Phone Number
            <input type="tel" name="phone" onChange={handelInputData} />
          </label>

          <label>
            Email
            <input type="email" name="email" onChange={handelInputData} />
          </label>
        </div>

        <div className="form__section-right">
          <label>
            Write your complaint
            <textarea
              name="complaint"
              rows="10"
              placeholder="You can complain here"
              onChange={handelInputData}
            ></textarea>
          </label>

          <div className="form__radio-group">
            <p>How do you want to be contacted? </p>
            <label>
              <input
                type="radio"
                name="contact"
                value="phone"
                onChange={handelInputData}
              />
              Phone
            </label>

            <label>
              <input
                type="radio"
                name="contact"
                value="email"
                onChange={handelInputData}
              />
              Email
            </label>

            <label>
              <input
                type="radio"
                name="contact"
                value="post"
                onChange={handelInputData}
              />
              Slow Mail
            </label>

            <label>
              <input
                type="radio"
                name="contact"
                value="none"
                onChange={handelInputData}
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
              onChange={handelInputData}
              checked={complaintFormData.consentToTermsCheck}
            />
          </label>
        </div>
        <input type="submit" value="Submit!" onClick={handleSubmit} />
      </form>
    </>
  );
}
