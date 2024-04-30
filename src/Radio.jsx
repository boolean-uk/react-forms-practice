export default function Radio({handleChange}) {
    return(
        <div className="form__radio-group">
                    <p>How do you want to be contacted? </p>
                    <label>
                        <input type="radio" name="contact" value="phone" onChange={(e) => {handleChange(e)}}/>
                        Phone
                    </label>

                    <label>
                        <input type="radio" name="contact" value="email" onChange={(e) => {handleChange(e)}}/>
                        Email
                    </label>

                    <label>
                        <input type="radio" name="contact" value="post" onChange={(e) => {handleChange(e)}}/>
                        Slow Mail
                    </label>

                    <label>
                        <input type="radio" name="contact" value="none" onChange={(e) => {handleChange(e)}}/>
                        No contact!
                    </label>
                </div>
    )
}