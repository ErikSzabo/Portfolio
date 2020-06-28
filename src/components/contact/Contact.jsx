import React, { useState } from 'react';
import Wave from '../Wave';

const Contact = () => {
	const [ name, setName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ message, setMessage ] = useState('');

	const submit = (e) => {
		e.preventDefault();
		const form = new FormData();
		const formData = new URLSearchParams(form);
		formData.append('name', name);
		formData.append('email', email);
		formData.append('message', message);

		fetch('https://script.google.com/macros/s/AKfycbx0W2rfnwf4wZan2leTtwyTH8LytbmLIojXmkjFkiiI6Np_IqA/exec', {
			body: formData,
			method: 'post',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			}
		});

		setName('');
		setMessage('');
		setEmail('');
	};

	return (
		<div className="page-container contacts">
			<Wave />
			<h1 className="contact-logo">Contact Me</h1>
			<form onSubmit={submit}>
				<div className="form-item form-name">
					<input
						required
						placeholder="Name..."
						type="text"
						id="name"
						name="name"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div className="form-item form-mail">
					<input
						required
						type="email"
						name="email"
						id="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder="E-mail..."
					/>
				</div>
				<div className="form-item form-msg">
					<textarea
						required
						type="text"
						name="message"
						id="message"
						placeholder="Message..."
						value={message}
						onChange={(e) => setMessage(e.target.value)}
					/>
				</div>
				<input type="submit" value="Send message!" />
			</form>
		</div>
	);
};

export default Contact;
