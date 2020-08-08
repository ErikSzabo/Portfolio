import React from 'react';
import './Button.scoped.css';

const Button = ({ type, value, className, onClick, isSubmit = false }) => (
  <input
    onClick={onClick}
    style={{ backgroundColor: type == 'ok' ? 'teal' : 'rgb(151, 44, 44)' }}
    className={`generic__button ${className}`}
    type={isSubmit ? 'submit' : 'button'}
    value={value}
  />
);

export default Button;
