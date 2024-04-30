export default function Textarea({handleChange , inputs}) {
    return(
        <label>
                    Write your complaint
                    <textarea
                        name="complaint"
                        rows="10"
                        placeholder="You can complain here"
                        onChange={(e) => {handleChange(e)}} value={inputs.complaint}
                    ></textarea>
                </label>
    )
}