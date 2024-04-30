/* eslint-disable react/prop-types */
export default function TelInput({ type, name, setTel }) {
    const handleChange = (e) => {
        setTel(e.target.value)
    }
    
    return (
        <input onChange={handleChange} type={type} name={name} />
    )
}