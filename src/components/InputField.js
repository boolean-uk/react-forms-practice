export default function InputField(props) {
  const { labelName, type, name, isRequired, value, handleChange } = props

  return (
    <label>
      {labelName}
      <input type={type} name={name} required={isRequired} value={value} onChange={handleChange} />
    </label>
  )
}