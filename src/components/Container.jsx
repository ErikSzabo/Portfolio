import React from 'react';
import './Container.scoped.css';

const Container = ({ children }) => (
    <div className="page-container">{children}</div>
);

export default Container;
