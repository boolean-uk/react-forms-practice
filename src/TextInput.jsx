/* eslint-disable react/prop-types */
export default function TextInput({ type, name, setText }) {
    const handleChange = (e) => {
        setText(e.target.value)
    }
    
    return (
        <input onChange={handleChange} type={type} name={name} />
    )
}