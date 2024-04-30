/* eslint-disable react/prop-types */
export default function AddressInput({ type, name, setAddress }) {
    const handleChange = (e) => {
        setAddress(e.target.value)
    }
    
    return (
        <input onChange={handleChange} type={type} name={name} />
    )
}