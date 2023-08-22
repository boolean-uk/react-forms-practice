function Complaints({data, handleChange}) {
    return (
        <label>
            Write your complaint
            <textarea
              name="complaint"
              rows="10"
              placeholder="You can complain here"
              value={data.complaint}
              onChange={handleChange}
            ></textarea>
          </label>
    )
}

export default Complaints