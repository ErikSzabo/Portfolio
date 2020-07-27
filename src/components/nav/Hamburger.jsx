import React from 'react';
import './Hamburger.css';

const Hamburger = ({ openState }) => (
    <div className={openState ? 'x-burger' : 'burger'}>
        <div className="burger-line"></div>
        <div className="burger-line"></div>
        <div className="burger-line"></div>
    </div>
);

export default Hamburger;
