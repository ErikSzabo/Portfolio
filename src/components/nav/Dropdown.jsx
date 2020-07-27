import React from 'react';
import './Dropdown.css';

const Dropdown = ({ hidden, children }) => (
    <div className={`nav-dropdown ${hidden && 'closed'}`}>
        <div className="nav-dropdown-childs">{children}</div>
    </div>
);

export default Dropdown;
