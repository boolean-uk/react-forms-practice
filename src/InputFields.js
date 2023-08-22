function InputFields({data, handleChange}) {
  return (
    <div className="form__section-left">
      <label>
        Full name
        <input
          type="text"
          name="fullname"
          value={data.fullname}
          required
          onChange={handleChange}
        />
      </label>
      <label>
        Address
        <input
          type="text"
          name="address"
          value={data.address}
          onChange={handleChange}
        />
      </label>
      <label>
        Phone Number
        <input
          type="tel"
          name="phoneNumber"
          value={data.phoneNumber}
          onChange={handleChange}
        />
      </label>

      <label>
        Email
        <input
          type="email"
          name="email"
          value={data.email}
          onChange={handleChange}
        />
      </label>
    </div>
  );
}

export default InputFields;
