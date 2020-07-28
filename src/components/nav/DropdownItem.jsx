import React from 'react';
import { Link } from 'react-router-dom';
import './DropdownItem.scoped.css';

const DropdownItem = ({ linkTo, name, navToggle }) => (
    <div onClick={navToggle} className="item">
        <Link to={linkTo}>
            <span className="item__text">{name}</span>
        </Link>
    </div>
);

export default DropdownItem;
