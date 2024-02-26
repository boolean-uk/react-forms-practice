import { useState } from "react";
import "./App.css";

export default function App() {
  // Add your state fields here
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [complaint, setComplaint] = useState("");
  const [contact, setContact] = useState("");
  const [consent, setConsent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ name, address, phone, email, complaint, contact, consent });
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
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Address
            <input
              type="text"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </label>
          <label>
            Phone Number
            <input
              type="tel"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </label>

          <label>
            Email
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={complaint}
              onChange={(e) => setComplaint(e.target.value)}
            ></textarea>
          </label>

          <div className="form__radio-group">
            <p>How do you want to be contacted? </p>
            <label>
              <input
                type="radio"
                name="contact"
                value="phone"
                checked={contact === "phone"}
                onChange={(e) => setContact(e.target.value)}
              />
              Phone
            </label>

            <label>
              <input
                type="radio"
                name="contact"
                value="email"
                checked={contact === "email"}
                onChange={(e) => setContact(e.target.value)}
              />
              Email
            </label>

            <label>
              <input
                type="radio"
                name="contact"
                value="post"
                checked={contact === "post"}
                onChange={(e) => setContact(e.target.value)}
              />
              Slow Mail
            </label>

            <label>
              <input
                type="radio"
                name="contact"
                value="none"
                checked={contact === "none"}
                onChange={(e) => setContact(e.target.value)}
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
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
            />
          </label>
        </div>
        <input type="submit" value="Submit!" />
      </form>
    </>
  );
}
