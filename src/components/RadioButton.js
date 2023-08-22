export default function RadioButton(props) {
  const { name, value, handleChange, isChecked, message } = props

  return (
    <label>
      <input
        type="radio" name={name} value={value}
        onChange={handleChange} checked={isChecked}
      />
      { message }
    </label>
  )
}