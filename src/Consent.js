function Consent ({data, setData}) {
    return (
        <label>
            I agree you take my data, and do whatever
            <input
              type="checkbox"
              name="consent"
              id="consent"
              checked={data.consent}
              onChange={() => setData({ ...data, consent: !data.consent })}
            />
          </label>
    )
}

export default Consent