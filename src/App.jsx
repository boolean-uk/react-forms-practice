import { useState } from "react";
import "./App.css";
import TextInput from "./TextInput";
import AddressInput from "./AddressInput";
import TelInput from "./TelInput";
import EmailInput from "./EmailInput";
import RadioInput from "./RadioInput";
import CheckboxInput from "./CheckboxInput";
import SubmitInput from "./SubmitInput";
import TextArea from "./TextArea";

export default function App() {

  //TODO: Add your state fields here
  const [text, setText] = useState('')
  const [address, setAddress] = useState('')
  const [tel, setTel] = useState('')
  const [email, setEmail] = useState('')
  const [textArea, setTextArea] = useState('')
  const [radio, setRadio] = useState('')
  const [checkbox, setCheckbox] = useState('')
  const [submit, setSubmit] = useState({})

  return (
    <>
      <form className="form">
        <h2>Complaining form!</h2>

        <div className="form__section-left">
          <label>
            Full name
            <TextInput  
              type='text' 
              name='name'
              setText={setText} 
              required 
            />
          </label>
          
          <label>
            Address
            <AddressInput 
              type='text' 
              name='address'
              setAddress={setAddress}  
            />
          </label>

          <label>
            Phone Number
            <TelInput 
              type='tel'
              name='phone'
              setTel={setTel} 
             />
          </label>

          <label>
            Email
            <EmailInput 
              type='email' 
              name='email'
              setEmail={setEmail}
            />
          </label>
        </div>

        <div className="form__section-right">
          <label>
            Write your complaint
            <TextArea 
              name='complaint'
              rows='10'
              placeholder='You can complain here'
              setTextArea={setTextArea}
            />
          </label>

          <div className="form__radio-group">
            <p>How do you want to be contacted? </p>
            <label>
              <RadioInput 
                type='radio' 
                name='contact' 
                value='phone'
                setRadio={setRadio} 
              />
              Phone
            </label>

            <label>
              <RadioInput 
                type='radio' 
                name='contact' 
                value='email' 
                setRadio={setRadio}
              />
              Email
            </label>

            <label>
              <RadioInput 
                type='radio' 
                name='contact' 
                value='post' 
                setRadio={setRadio}
              />
              Slow Mail
            </label>

            <label>
              <RadioInput 
                type='radio' 
                name='contact' 
                value='none' 
                setRadio={setRadio}
              />
              No contact!
            </label>
          </div>

          <label>
            I agree you take my data, and do whatever
            <CheckboxInput 
              type='checkbox' 
              name='consent' 
              value='consent' 
              setCheckbox={setCheckbox}
            />
          </label>
        </div>

        <SubmitInput 
          type='submit' 
          value='Submit!' 
          submit={submit}
          setSubmit={setSubmit}
          text={text}
          address={address}
          tel={tel}
          email={email}
          textArea={textArea}
          radio={radio}
          checkbox={checkbox}
        />
      </form>
    </>
  );
}
