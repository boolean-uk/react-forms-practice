/* eslint-disable react/prop-types */
export default function EmailInput({ type, name, setEmail }) {
    const handleChange = (e) => {
        setEmail(e.target.value)
    }
    
    return (
        <input onChange={handleChange} type={type} name={name} />
    )
}