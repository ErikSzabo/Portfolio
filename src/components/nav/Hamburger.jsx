import React from 'react';
import './Hamburger.scoped.css';

const Hamburger = ({ openState }) => (
    <div className={openState ? 'x-burger' : 'burger'}>
        <div className="burger__line"></div>
        <div className="burger__line"></div>
        <div className="burger__line"></div>
    </div>
);

export default Hamburger;
