import React, { useState } from 'react';
import FormGroup from './FormGroup';
import FormButtons from './FormButtons';
import './Contact.scoped.css';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [response, setResponse] = useState({
        valid: false,
        submitted: false,
    });

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
        setResponse((prev) => {
            return { ...prev, submitted: true };
        });

        if (!validateInput()) {
            setResponse((prev) => {
                return { ...prev, valid: false };
            });
            return;
        }

        fetch(
            'https://script.google.com/macros/s/AKfycbx0W2rfnwf4wZan2leTtwyTH8LytbmLIojXmkjFkiiI6Np_IqA/exec',
            {
                body: createData(),
                method: 'post',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            }
        );

        setName('');
        setMessage('');
        setEmail('');
        setResponse((prev) => {
            return { ...prev, valid: true };
        });
    };

    return (
        <div className="contacts">
            <h1 className="contacts__header">Contact Me!</h1>
            <p className="contacts__description">
                If you are intrested, fill in the form, send me a mail and I
                will answer you as soon as possible! If you don't like forms,
                you can send me an e-mail to {'  '}
                <span className="text-highlight">erik1szabo1@gmail.com</span>.
                I'm mainly intrested in frontend and "JavaScript" development.
            </p>
            <form className="contacts__form" onSubmit={submit}>
                <FormGroup
                    name="name"
                    iconClass="fa fa-user fa-2x"
                    placeholder="Name"
                    type="text"
                    isTextArea={false}
                    setter={setName}
                />
                <FormGroup
                    name="email"
                    placeholder="E-mail"
                    iconClass="fa fa-envelope fa-2x"
                    type="email"
                    isTextArea={false}
                    setter={setEmail}
                />
                <FormGroup
                    name="message"
                    placeholder="Message"
                    iconClass="fa fa-sticky-note fa-2x"
                    isTextArea={true}
                    setter={setMessage}
                />
                <FormButtons submit={submit} />
            </form>

            {response.valid && response.submitted ? (
                <p>Your message was sent!</p>
            ) : !response.valid && response.submitted ? (
                <p>Please fill in the form correctly!</p>
            ) : (
                ''
            )}
        </div>
    );
};

export default Contact;
