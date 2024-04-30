/* eslint-disable react/prop-types */
export default function CheckboxInput({ type, name, value, setCheckbox }) {
    const handleChange = (e) => {
        setCheckbox(e.target.value)
    }
    
    return (
        <input onChange={handleChange} type={type} name={name} value={value} />
    )
}