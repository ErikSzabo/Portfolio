import React from 'react'
import { Link } from 'react-router-dom';

const DropdownItem = ({ linkTo, name, navToggle }) => (
    <div onClick={navToggle} className="dropdown-item">
        <Link to={linkTo}>
            <span className="dropdownitem-text">{name}</span>
        </Link>
    </div>
)

export default DropdownItem;