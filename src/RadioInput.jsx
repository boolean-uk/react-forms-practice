/* eslint-disable react/prop-types */
export default function RadioInput({ type, name, value, setRadio }) {
    const handleChange = (e) => {
        setRadio(e.target.value)
    }
    
    return (
        <input onChange={handleChange} type={type} name={name} value={value} />
    )
}