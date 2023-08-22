import { useState } from "react";
import "./App.css";
import InputFields from "./InputFields";
import Complaints from "./Compaints";
import Contact from "./Contact";
import Consent from "./Consent";

export default function App() {
  //TODO: Add your state fields here
  const [data, setData] = useState({
    fullname: "",
    address: "",
    phoneNumber: "",
    email: "",
    complaint: "",
    contact: "",
    consent: false,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(data);
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h2>Complaining form!</h2>

        <InputFields data={data} handleChange={handleChange} />

        <div className="form__section-right">
          <Complaints data={data} handleChange={handleChange} />

          <Contact data={data} handleChange={handleChange} />

          <Consent data={data} setData={setData} />
        </div>
        <input type="submit" value="Submit!" />
      </form>
    </>
  );
}
