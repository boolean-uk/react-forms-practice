function Contact({data, handleChange}) {
  return (
    <div className="form__radio-group">
      <p>How do you want to be contacted? </p>
      <label>
        <input
          id="phone"
          type="radio"
          name="contact"
          value="phone"
          onChange={handleChange}
          checked={data.contact === "phone"}
        />
        Phone
      </label>

      <label>
        <input
          id="email"
          type="radio"
          name="contact"
          value="email"
          onChange={handleChange}
          checked={data.contact === "email"}
        />
        Email
      </label>

      <label>
        <input
          id="post"
          type="radio"
          name="contact"
          value="post"
          onChange={handleChange}
          checked={data.contact === "post"}
        />
        Slow Mail
      </label>

      <label>
        <input
          id="none"
          type="radio"
          name="contact"
          value="none"
          onChange={handleChange}
          checked={data.contact === "none"}
        />
        No contact!
      </label>
    </div>
  );
}

export default Contact;
