import React from 'react';
import './Dropdown.scoped.css';

const Dropdown = ({ hidden, children }) => (
    <div className={`dropdown ${hidden && 'closed'}`}>
        <div className="dropdown__childs">{children}</div>
    </div>
);

export default Dropdown;
