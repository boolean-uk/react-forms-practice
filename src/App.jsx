import { useState } from "react";
import "./App.css";

export default function App() {
  //TODO: Add your state fields here
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
    complaint: "",
    contact: "",
    consent: false,
  });

  const handleFormChange = (event) => {
    // Description: Handles updates to the form and updates the state
    // Input: event
    // Load the name, value, and type of the input from event
    const { name, type, value, checked } = event.target;
    console.log("handleFormChange", name, type, value, checked);

    // Check what field has been changed and update it
    if (name === "name") setFormData({ ...formData, name: value });
    else if (name === "address") setFormData({ ...formData, address: value });
    else if (name === "phone") setFormData({ ...formData, phone: value });
    else if (name === "email") setFormData({ ...formData, email: value });
    else if (name === "complaint")
      setFormData({ ...formData, complaint: value });
    else if (name === "contact") setFormData({ ...formData, contact: value });
    else if (type === "checkbox" && name === "consent")
      setFormData({ ...formData, consent: checked });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      "Name: " +
        formData.name +
        "\nAddress: " +
        formData.address +
        "\nPhoneNr: " +
        formData.phone +
        "\nEmail: " +
        formData.email +
        "\nComplaint: " +
        formData.complaint +
        "\nContact: " +
        formData.contact +
        "\nConsent: " +
        formData.consent
    );
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
              onChange={handleFormChange}
              value={formData.name}
            />
          </label>
          <label>
            Address
            <input
              type="text"
              name="address"
              onChange={handleFormChange}
              value={formData.address}
            />
          </label>
          <label>
            Phone Number
            <input
              type="tel"
              name="phone"
              onChange={handleFormChange}
              value={formData.phone}
            />
          </label>

          <label>
            Email
            <input
              type="email"
              name="email"
              onChange={handleFormChange}
              value={formData.email}
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
              onChange={handleFormChange}
              value={formData.complaint}
            ></textarea>
          </label>

          <div className="form__radio-group">
            <p>How do you want to be contacted? </p>
            <label>
              <input
                type="radio"
                name="contact"
                value="phone"
                onChange={handleFormChange}
                checked={formData.contact === "phone"}
              />
              Phone
            </label>

            <label>
              <input
                type="radio"
                name="contact"
                value="email"
                onChange={handleFormChange}
                checked={formData.contact === "email"}
              />
              Email
            </label>

            <label>
              <input
                type="radio"
                name="contact"
                value="post"
                onChange={handleFormChange}
                checked={formData.contact === "post"}
              />
              Slow Mail
            </label>

            <label>
              <input
                type="radio"
                name="contact"
                value="none"
                onChange={handleFormChange}
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
              onChange={handleFormChange}
              checked={formData.consent}
            />
          </label>
        </div>
        <input type="submit" value="Submit!" />
      </form>
    </>
  );
}
