import React, { useState } from 'react';
import ContactPopup from './ContactPopup';
import ContactInput from './ContactInput';

const messages = {
	initial: '',
	error: 'Incorrect, please use a valid e-mail address and be sure to fill in everything!',
	success: 'Thank you for contacting me!'
};

const Contact = () => {
	const [ name, setName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ message, setMessage ] = useState('');
	const [ popupMessage, setPopupMessage ] = useState(messages.initial);

	const validateInput = () => {
		return /\S+@\S+\.\S+/.test(email) && name.trim() && message.trim();
	};

	const createData = () => {
		const form = new FormData();
		const formData = new URLSearchParams(form);
		formData.append('name', name);
		formData.append('email', email);
		formData.append('message', message);
		return formData;
	};

	const submit = (e) => {
		e.preventDefault();

		if (!validateInput()) {
			setPopupMessage(messages.error);
			return;
		}

		fetch('https://script.google.com/macros/s/AKfycbx0W2rfnwf4wZan2leTtwyTH8LytbmLIojXmkjFkiiI6Np_IqA/exec', {
			body: createData(),
			method: 'post',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			}
		});

		setName('');
		setMessage('');
		setEmail('');
		setPopupMessage(messages.success);
	};

	return (
		<div className="contacts">
			<h1 className="contact-logo">Contact Me</h1>
			<ContactPopup message={popupMessage} />
			<form onSubmit={submit}>
				<ContactInput setter={setName} value={name} type="text" placeholder="Name..." />
				<ContactInput setter={setEmail} value={email} type="email" placeholder="E-mail..." />
				<ContactInput setter={setMessage} value={message} type="textarea" placeholder="Message..." />
				<input type="submit" value="Send message!" />
			</form>
		</div>
	);
};

export default Contact;
