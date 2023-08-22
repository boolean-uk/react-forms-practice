import { useState } from "react";
import "./App.css";

export default function App() {
  
  //TODO: Add your state fields here
  const [formData,setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    email: '',
    complaint: '',
    contact: {
      phone: false,
      email: false,
      post: false
    },
    consent: false
  })

  const handleChange = (event) => {
    const { name, value} = event.target

    setFormData({...formData,[name]: value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(formData)
  }

  const handleContact = (event) => {
    const {name, value, checked} = event.target
    const newContact = {...formData.contact,[value]: checked}
    console.log(newContact)
    setFormData({...formData,[name]: newContact})
    console.log(formData.contact)
  }


  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h2>Complaining form!</h2>
        <div className="form__section-left">
          <label>
            Full name
            <input type="text" name="name" onChange={handleChange} required />
          </label>
          <label>
            Address
            <input type="text" name="address" onChange={handleChange} />
          </label>
          <label>
            Phone Number
            <input type="tel" name="phone" onChange={handleChange}/>
          </label>

          <label>
            Email
            <input type="email" name="email" onChange={handleChange}/>
          </label>
        </div>

        <div className="form__section-right">
          <label>
            Write your complaint
            <textarea
              name="complaint"
              rows="10"
              placeholder="You can complain here"
              onChange={handleChange}
            ></textarea>
          </label>

          <div className="form__radio-group">
            <p>How do you want to be contacted? </p>
            <label>
              <input type="radio" name="contact" value="phone" onChange={handleContact} checked={formData.contact.phone}/>
              Phone
            </label>

            <label>
              <input type="radio" name="contact" value="email" onChange={handleContact} checked={formData.contact.email}/>
              Email
            </label>

            <label>
              <input type="radio" name="contact" value="post" onChange={handleContact} checked={formData.contact.post}/>
              Slow Mail
            </label>

            <label>
              <input type="radio" name="contact" value="none" onChange={handleContact}/>
              No contact!
            </label>
          </div>

          <label>
            I agree you take my data, and do whatever
            <input type="checkbox" name="consent" id="consent" onChange={(event) => console.log(event.target.value)}/>
          </label>
        </div>
        <input type="submit" value="Submit!" />
      </form>
    </>
  );
}
