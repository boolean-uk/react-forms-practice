import { useState } from "react";
import "./App.css";

export default function App() {

  //TODO: Add your state fields here
  const [form, setForm] = useState({
    name: '',
    address: '',
    phone: '',
    email: '',
    text: '',
    contactMethod: null,
    agree: false
  });

  const logResults = () => {
    console.log(`
    Name:${form.name}, 
    Address: ${form.address}, 
    Phone: ${form.phone}, 
    Email: ${form.email}, 
    Text: ${form.text}, 
    Contact method: ${form.contactMethod}, 
    Agrees to stuff: ${form.agree}`)
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
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
          </label>
          <label>
            Address
            <input
              type="text"
              name="address"
              value={form.address}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
              required
            />
          </label>
          <label>
            Phone Number
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
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
              value={form.text}
              onChange={(e) => setForm({ ...form, text: e.target.value })}
            ></textarea>
          </label>
          <div className="form__radio-group">
            <p>How do you want to be contacted? </p>
            <label>
              <input
                type="radio"
                name="contact"
                value="phone"
                onChange={(e) =>
                  setForm({ ...form, contactMethod: e.target.value })
                }
              />
              Phone
            </label>

            <label>
              <input
                type="radio"
                name="contact"
                value="email"
                onChange={(e) =>
                  setForm({ ...form, contactMethod: e.target.value })
                }
              />
              Email
            </label>

            <label>
              <input
                type="radio"
                name="contact"
                value="post"
                onChange={(e) =>
                  setForm({ ...form, contactMethod: e.target.value })
                }
              />
              Slow Mail
            </label>

            <label>
              <input
                type="radio"
                name="contact"
                value="none"
                onChange={(e) =>
                  setForm({ ...form, contactMethod: e.target.value })
                }
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
              checked={form.agree}
              onChange={(e) => setForm({ ...form, agree: e.target.checked })}
            />
          </label>
        </div>
        <input type="submit" value="Submit!" onClick={logResults} />
      </form>
    </>
  );
}
