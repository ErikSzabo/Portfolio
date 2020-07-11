import React from 'react'

const Dropdown = ({ hidden, children }) => (
    <div className={`nav-dropdown ${hidden && 'hidden'}`}>
        <div className="nav-dropdown-childs">
            {children}
        </div>
    </div>
)


export default Dropdown;
