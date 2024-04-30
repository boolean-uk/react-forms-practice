export default function Checkbox({handleChange}) {
    return (
        <label>
            I agree you take my data, and do whatever
            <input
                type="checkbox"
                name="consent"
                id="consent"
                onChange={(e) => {
                    handleChange(e)
                }}
            />
        </label>
    )
}
