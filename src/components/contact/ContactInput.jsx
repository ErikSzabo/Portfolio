import React from 'react';

const ContactInput = ({ setter, placeholder = '', value, type }) => (
	<div className="form-item">
		{type === 'textarea' ? (
			<textarea required placeholder={placeholder} value={value} onChange={(e) => setter(e.target.value)} />
		) : (
			<input
				required
				placeholder={placeholder}
				type={type}
				value={value}
				onChange={(e) => setter(e.target.value)}
			/>
		)}
	</div>
);

export default ContactInput;
