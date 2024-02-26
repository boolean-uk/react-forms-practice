import { useState } from "react";
import "./App.css";

const INITAL_FORM_DATA = {
	name: "",
	address: "",
	phone: "",
	email: "",
	complaint: "",
	contact: "",
	consent: false,
};

export default function App() {
	//TODO: Add your state fields here
	const [formData, setFormData] = useState(INITAL_FORM_DATA);

	const handleFormInput = (event) => {
		const { value, name, type } = event.target;
		console.log("Value", value, "Name", name, "Type", type);

		if (name !== undefined) {
			if (type === "checkbox") {
				setFormData({ ...formData, [name]: !formData[name] });
			} else {
				setFormData({ ...formData, [name]: value });
			}
		}
	};

	const onSubmit = () => {
		console.log("Form data");
		console.log("Name:", formData.name);
		console.log("Adress:", formData.address);
		console.log("Phone nr:", formData.phone);
		console.log("Email:", formData.email);
		console.log("Complaint:", formData.complaint);
		console.log("Contact:", formData.contact);
		console.log("Consent:", formData.consent);
	};

	// const [formName, setFormName] = useState("");
	// const [formAdress, setFormAdress] = useState("");
	// const [formPhoneNr, setFormPhoneNr] = useState("");
	// const [formEmail, setFormEmail] = useState("");
	// const [formComplaint, setFormComplaint] = useState("");
	// const [formContact, setFormContact] = useState("");
	// const [formConsent, setFormConsent] = useState(false);

	// const handleInput = (event) => {
	// 	const { value, name } = event.target;

	// 	switch (name) {
	// 		case "name":
	// 			setFormName(value);
	// 			break;
	// 		case "address":
	// 			setFormAdress(value);
	// 			break;
	// 		case "phone":
	// 			setFormPhoneNr(value);
	// 			break;
	// 		case "email":
	// 			setFormEmail(value);
	// 			break;
	// 		case "complaint":
	// 			setFormComplaint(value);
	// 			break;
	// 		case "contact":
	// 			setFormContact(value);
	// 			break;
	// 		case "consent":
	// 			setFormConsent(!formConsent);
	// 			break;
	// 		default:
	// 			console.error("Form event not handled");
	// 			break;
	// 	}
	// };

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
							value={formData.name}
							onChange={handleFormInput}
						/>
					</label>
					<label>
						Address
						<input
							type="text"
							name="address"
							value={formData.address}
							onChange={handleFormInput}
						/>
					</label>
					<label>
						Phone Number
						<input
							type="tel"
							name="phone"
							value={formData.phone}
							onChange={handleFormInput}
						/>
					</label>

					<label>
						Email
						<input
							type="email"
							name="email"
							value={formData.email}
							onChange={handleFormInput}
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
							onChange={handleFormInput}
						></textarea>
					</label>

					<div className="form__radio-group">
						<p>How do you want to be contacted? </p>
						<label>
							<input
								type="radio"
								name="contact"
								value="phone"
								checked={formData.contact === "phone"}
								onChange={handleFormInput}
							/>
							Phone
						</label>

						<label>
							<input
								type="radio"
								name="contact"
								value="email"
								checked={formData.contact === "email"}
								onChange={handleFormInput}
							/>
							Email
						</label>

						<label>
							<input
								type="radio"
								name="contact"
								value="post"
								checked={formData.contact === "post"}
								onChange={handleFormInput}
							/>
							Slow Mail
						</label>

						<label>
							<input
								type="radio"
								name="contact"
								value="none"
								checked={formData.contact === "none"}
								onChange={handleFormInput}
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
							checked={formData.consent}
							onChange={handleFormInput}
						/>
					</label>
				</div>
				<input type="submit" value="Submit!" onClick={onSubmit} />
			</form>
		</>
	);
}
