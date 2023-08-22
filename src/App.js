import { useState } from "react";
import "./App.css";

export default function App() {
    //TODO: Add your state fields here

    const [formData, setFormData] = useState({
        fullName: "",
        address: "",
        phoneNumber: "",
        email: "",
        complaint: "",
        contactPreference: "",
        agreementToTerms: false,
    });

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        const newValue = type === "checkbox" ? checked : value;
        setFormData({
            ...formData,
            [name]: newValue,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(formData);
    };

    return (
        <>
            <form className="form" onSubmit={handleSubmit}>
                <h2>Complaining form!</h2>
                <div className="form__section-left">
                    <label>
                        Full name
                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Address
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Phone Number
                        <input
                            type="tel"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                        />
                    </label>

                    <label>
                        Email
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
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
                            value={formData.complaint}
                            onChange={handleChange}
                        ></textarea>
                    </label>

                    <div className="form__radio-group">
                        <p>How do you want to be contacted? </p>
                        <label htmlFor="phone">
                            <input
                                type="radio"
                                name="contactPreference"
                                value="phone"
                                id="phone"
                                onChange={handleChange}
                                checked={formData.contactPreference === "phone"}
                            />
                            Phone
                        </label>

                        <label htmlFor="email">
                            <input
                                type="radio"
                                name="contactPreference"
                                value="email"
                                id="email"
                                onChange={handleChange}
                                checked={formData.contactPreference === "email"}
                            />
                            Email
                        </label>

                        <label htmlFor="post">
                            <input
                                type="radio"
                                name="contactPreference"
                                value="post"
                                id="post"
                                onChange={handleChange}
                                checked={formData.contactPreference === "post"}
                            />
                            Slow Mail
                        </label>

                        <label htmlFor="none">
                            <input
                                type="radio"
                                name="contactPreference"
                                value="none"
                                id="none"
                                onChange={handleChange}
                                checked={formData.contactPreference === "none"}
                            />
                            No contact!
                        </label>
                    </div>

                    <label>
                        I agree you take my data, and do whatever
                        <input
                            type="checkbox"
                            name="agreementToTerms"
                            id="consent"
                            checked={formData.agreementToTerms}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <input type="submit" value="Submit!" />
            </form>
        </>
    );
}
