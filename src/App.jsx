import { useState } from "react";
import "./App.css";
import Input from "./Input"

export default function App() {

  //TODO: Add your state fields here
  const [formData, setFormData] = useState([])
  return (
    <>
      <Input formData={formData} setFormData={setFormData} />
    </>
  );
}
