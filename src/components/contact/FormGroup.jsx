import React from 'react';
import './FormGroup.scoped.css';

const FormGroup = ({
    placeholder,
    iconClass,
    type,
    name,
    isTextArea,
    setter,
}) => (
    <div className="form-group">
        <label htmlFor={name}>
            <i className={iconClass} aria-hidden="true"></i>
        </label>
        {isTextArea ? (
            <textarea
                onChange={(e) => setter(e.target.value)}
                placeholder={placeholder}
                name={name}
                id={name}
            />
        ) : (
            <input
                onChange={(e) => setter(e.target.value)}
                placeholder={placeholder}
                type={type}
                name={name}
                id={name}
            />
        )}
    </div>
);

export default FormGroup;
