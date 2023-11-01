import { useState } from "react";
import "./App.css";

export default function App() {
    //TODO: Add your state fields here
    const [fullName, setFullName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [complaint, setComplaint] = useState("");
    const [contacted, setContacted] = useState("");
    const [agree, setAgree] = useState(false);

    const submitHandler = (e) => {
        e.preventDefault();

        console.log(`Full Name: ${fullName}`);
        console.log(`Address: ${address}`);
        console.log(`Phone: ${phone}`);
        console.log(`Email: ${email}`);
        console.log(`Complaint: ${complaint}`);
        console.log(`Contacted: ${contacted}`);
        console.log(`Agree: ${agree}`);
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
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        Address
                        <input
                            type="text"
                            name="address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </label>
                    <label>
                        Phone Number
                        <input
                            type="tel"
                            name="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </label>

                    <label>
                        Email
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
                            value={complaint}
                            onChange={(e) => setComplaint(e.target.value)}
                        ></textarea>
                    </label>

                    <div
                        className="form__radio-group"
                        onChange={(e) => setContacted(e.target.value)}
                        value={contacted}
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
                            value={agree}
                            onChange={() => setAgree(!agree)}
                        />
                    </label>
                </div>
                <input type="submit" value="Submit!" />
            </form>
        </>
    );
}
