import { useState } from "react";
import "./App.css";



const Initial_Complaining_Form = {
  name: "",
  address: "",
  phone: "",
  email: "",
  complaint: "",
  contact: "",
  consent: false
}


export default function App() {

  //TODO: Add your state fields here
  const [complainingForm, setComplainingForm] = useState(Initial_Complaining_Form)


  const complainingFormSubmit = (event) => {
    event.preventDefault()
    //console.log(form)

   const options = {
      method :'POST',
      Headers: { 'content-type': 'application/json' },
      body: JSON.stringify(complainingForm)

    }
    fetch('http://localhost:3000', options)

    setComplainingForm(Initial_Complaining_Form)
  }


  function complainingFormHandler(event) {
    const { checked, value, name, type } = event.target

    if (type === 'checkbox') {
      setComplainingForm({ ...complainingForm, [name]: checked })
    } else {
      setComplainingForm({...complainingForm, [name] : value})
    }
  }

  //const updatedValue = {
  // [name]: type === "checkbox" ? checked : value,
  //;

  const contactOptions = ["phone", "email", "letter"];



  return (
    <>
      <form className="form" onSubmit={complainingFormSubmit}>
        <h2>Complaining form!</h2>
        <div className="form__section-left">
          <label>
            Full name
            <input type="text" name="name" required value={complainingForm.name} onChange={complainingFormHandler} />
          </label>
          <label>
            Address
            <input type="text" name="address" value={complainingForm.address} onChange={complainingFormHandler} />
          </label>
          <label>
            Phone Number
            <input type="tel" name="phone" value={complainingForm.phone} onChange={complainingFormHandler} />
          </label>

          <label>
            Email
            <input type="email" name="email" value={complainingForm.email} onChange={complainingFormHandler} />
          </label>
        </div>

        <div className="form__section-right">
          <label>
            Write your complaint
            <textarea
              name="complaint"
              rows="10"
              placeholder="You can complain here"
              value={complainingForm.complaint}
              onChange={complainingFormHandler}
            ></textarea>
          </label>

          <div className="form__radio-group">
            <p>How do you want to be contacted? </p>
            <label>
              <input type="radio" name="contact" value="phone" checked={complainingForm.contact === 'phone'} onChange={complainingFormHandler} />
              Phone
            </label>

            <label>
              <input type="radio" name="contact" value="email" checked={complainingForm.contact === 'email'} onChange={complainingFormHandler} />
              Email
            </label>

            <label>
              <input type="radio" name="contact" value="post" checked={complainingForm.contact === 'post'} onChange={complainingFormHandler} />
              Slow Mail
            </label>

            <label>
              <input type="radio" name="contact" value="none" checked={complainingForm.contact === 'none'} onChange={complainingFormHandler} />
              No contact!
            </label>
          </div>

          <label>
            I agree you take my data, and do whatever
            <input type="checkbox" name="consent" id="consent" checked={complainingForm.consent} onChange={complainingFormHandler} />
          </label>
        </div>
        <input type="submit" value="Submit!" />
      </form>
    </>
  );
}
