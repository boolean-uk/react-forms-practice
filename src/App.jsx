import { useState } from "react";
import "./App.css";

// const INITAL_FORM_DATA = {
// 	name: "",
// };

export default function App() {
	//TODO: Add your state fields here
	// const [formData, setFormData] = useState({ ...INITAL_FORM_DATA });

	// const handleInput = (event) => {
	// 	const { value, name } = event.target;
	// 	console.log(value, name);
	// 	setFormData({ ...formData, name: value });
	// };

	const [formName, setFormName] = useState("");
	const [formAdress, setFormAdress] = useState("");
	const [formPhoneNr, setFormPhoneNr] = useState("");
	const [formEmail, setFormEmail] = useState("");
	const [formComplaint, setFormComplaint] = useState("");
	const [formContact, setFormContact] = useState("");
	const [formConsent, setFormConsent] = useState(false);

	const onSubmit = () => {
		console.log("Form data");
		console.log("Name:", formName);
		console.log("Adress:", formAdress);
		console.log("Phone nr:", formPhoneNr);
		console.log("Email:", formEmail);
		console.log("Complaint:", formComplaint);
		console.log("Contact:", formContact);
		console.log("Consent:", formConsent);
	};

	const handleInput = (event) => {
		const { value, name } = event.target;

		switch (name) {
			case "name":
				setFormName(value);
				break;
			case "address":
				setFormAdress(value);
				break;
			case "phone":
				setFormPhoneNr(value);
				break;
			case "email":
				setFormEmail(value);
				break;
			case "complaint":
				setFormComplaint(value);
				break;
			case "contact":
				setFormContact(value);
				break;
			case "consent":
				setFormConsent(!formConsent);
				break;
			default:
				console.error("Form event not handled");
				break;
		}
	};

	return (
		<>
			<form className="form">
				<h2>Complaining form!</h2>
				<div className="form__section-left">
					<label>
						Full name
						<input
							type="text"
							name="name"
							required
							value={formName}
							onChange={handleInput}
						/>
					</label>
					<label>
						Address
						<input
							type="text"
							name="address"
							value={formAdress}
							onChange={handleInput}
						/>
					</label>
					<label>
						Phone Number
						<input
							type="tel"
							name="phone"
							value={formPhoneNr}
							onChange={handleInput}
						/>
					</label>

					<label>
						Email
						<input
							type="email"
							name="email"
							value={formEmail}
							onChange={handleInput}
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
							value={formComplaint}
							onChange={handleInput}
						></textarea>
					</label>

					<div className="form__radio-group">
						<p>How do you want to be contacted? </p>
						<label>
							<input
								type="radio"
								name="contact"
								value="phone"
								checked={formContact === "phone"}
								onChange={handleInput}
							/>
							Phone
						</label>

						<label>
							<input
								type="radio"
								name="contact"
								value="email"
								checked={formContact === "email"}
								onChange={handleInput}
							/>
							Email
						</label>

						<label>
							<input
								type="radio"
								name="contact"
								value="post"
								checked={formContact === "post"}
								onChange={handleInput}
							/>
							Slow Mail
						</label>

						<label>
							<input
								type="radio"
								name="contact"
								value="none"
								checked={formContact === "none"}
								onChange={handleInput}
							/>
							No contact!
						</label>
					</div>

					<label>
						I agree you take my data, and do whatever
						<input
							type="checkbox"
							name="consent"
							id="consent"
							checked={formConsent}
							onChange={handleInput}
						/>
					</label>
				</div>
				<input type="submit" value="Submit!" onClick={onSubmit} />
			</form>
		</>
	);
}
