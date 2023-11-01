import { useState } from "react";
import "./App.css";

export default function App() {
    //TODO: Add your state fields here
    // const [fullName, setFullName] = useState("");
    // const [address, setAddress] = useState("");
    // const [phone, setPhone] = useState("");
    // const [email, setEmail] = useState("");
    // const [complaint, setComplaint] = useState("");
    // const [contacted, setContacted] = useState("");
    // const [agree, setAgree] = useState(false);

    const [data, setData] = useState({
        fullName: "",
        address: "",
        phone: "",
        email: "",
        complaint: "",
        contacted: "",
        agree: false,
    });

    const submitHandler = (e) => {
        e.preventDefault();

        console.log(data);
    };

    return (
        <>
            <form className="form" onSubmit={submitHandler}>
                <h2>Complaining form!</h2>
                <div className="form__section-left">
                    <label>
                        Full name
                        <input
                            type="text"
                            name="name"
                            value={data.fullName}
                            onChange={(e) =>
                                setData({ ...data, fullName: e.target.value })
                            }
                            required
                        />
                    </label>
                    <label>
                        Address
                        <input
                            type="text"
                            name="address"
                            value={data.address}
                            onChange={(e) =>
                                setData({ ...data, address: e.target.value })
                            }
                        />
                    </label>
                    <label>
                        Phone Number
                        <input
                            type="tel"
                            name="phone"
                            value={data.phone}
                            onChange={(e) =>
                                setData({ ...data, phone: e.target.value })
                            }
                        />
                    </label>

                    <label>
                        Email
                        <input
                            type="email"
                            name="email"
                            value={data.email}
                            onChange={(e) =>
                                setData({ ...data, email: e.target.value })
                            }
                        />
                    </label>
                </div>

                <div className="form__section-right">
                    <label>
                        Write your complaint
                        <textarea
                            name="complaint"
                            rows="10"
                            placeholder="You can complain here"
                            value={data.complaint}
                            onChange={(e) =>
                                setData({ ...data, complaint: e.target.value })
                            }
                        ></textarea>
                    </label>

                    <div
                        className="form__radio-group"
                        value={data.contacted}
                        onChange={(e) =>
                            setData({ ...data, contacted: e.target.value })
                        }
                    >
                        <p>How do you want to be contacted? </p>
                        <label>
                            <input type="radio" name="contact" value="phone" />
                            Phone
                        </label>

                        <label>
                            <input type="radio" name="contact" value="email" />
                            Email
                        </label>

                        <label>
                            <input type="radio" name="contact" value="post" />
                            Slow Mail
                        </label>

                        <label>
                            <input type="radio" name="contact" value="none" />
                            No contact!
                        </label>
                    </div>

                    <label>
                        I agree you take my data, and do whatever
                        <input
                            type="checkbox"
                            name="consent"
                            id="consent"
                            value={data.agree}
                            onChange={() =>
                                setData({ ...data, agree: !data.agree })
                            }
                        />
                    </label>
                </div>
                <input type="submit" value="Submit!" />
            </form>
        </>
    );
}
