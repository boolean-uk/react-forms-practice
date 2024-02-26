import { useState } from "react";
import "./App.css";

const INITIAL_FORM_DATA = {
  name: "",
  address:"",
  phone:"",
  email:"",
  complaint:"",
  contact:"phone",
  consent:false
}

export default function App() {
  const [formData, setFormData] = useState({...INITIAL_FORM_DATA})
  //TODO: Add your state fields here
  const handleSubmit = (event) =>{
    event.preventDefault()
    console.log(formData)
    }

  const handleInputChange = (event) =>{
    if (event.target.name !== undefined)
    {
      if (event.target.type === 'checkbox')
      {
        setFormData( {...formData, [event.target.name]:event.target.checked})
      }
      else {
        const data = {...formData, [event.target.name]:event.target.value}
        setFormData(data)
      }
    }


  }

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h2>Complaining form!</h2>
        <div className="form__section-left">
          <label>
            Full name
            <input type="text" name="name" required onChange={handleInputChange}/>
          </label>
          <label>
            Address
            <input type="text" name="address" onChange={handleInputChange} />
          </label>
          <label>
            Phone Number
            <input type="tel" name="phone" onChange={handleInputChange}/>
          </label>

          <label>
            Email
            <input type="email" name="email" onChange={handleInputChange} />
          </label>
        </div>

        <div className="form__section-right">
          <label>
            Write your complaint
            <textarea
              name="complaint"
              rows="10"
              placeholder="You can complain here"
              onChange={handleInputChange}
            ></textarea>
          </label>

          <div className="form__radio-group">
            <p>How do you want to be contacted? </p>
            <label>
              <input type="radio" name="contact" value="phone" onChange={handleInputChange} />
              Phone
            </label>

            <label>
              <input type="radio" name="contact" value="email" onChange={handleInputChange} />
              Email
            </label>

            <label>
              <input type="radio" name="contact" value="post" onChange={handleInputChange}/>
              Slow Mail
            </label>

            <label>
              <input type="radio" name="contact" value="none" onChange={handleInputChange}/>
              No contact!
            </label>
          </div>

          <label>
            I agree you take my data, and do whatever
            <input type="checkbox" name="consent" id="consent" onChange={handleInputChange}/>
          </label>
        </div>
        <input type="submit" value="Submit!" />
      </form>
    </>
  );
}
