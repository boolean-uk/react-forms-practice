/* eslint-disable react/prop-types */
export default function TextArea({ name, rows, placeholder, setTextArea }) {
    const handleChange = (e) => {
        setTextArea(e.target.value)
    }
    
    return (
        <textarea
            name={name}
            rows={rows}
            placeholder={placeholder}
            onChange={handleChange}
        >
        </textarea>
    )
}