/* eslint-disable react/prop-types */
export default function SubmitInput({ type, value, submit, setSubmit, text, address, tel, email, textArea, radio, checkbox }) {
    const handleClick = (e) => {
        e.preventDefault()
        setSubmit({text, address, tel, email, textArea, radio, checkbox})
        console.log(submit)
    }
    
    return (
        <input onClick={handleClick} type={type} value={value} />
    )
}