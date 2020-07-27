import React from 'react';
import './VisitContent.css';

const VisitContent = ({ url }) => (
    <div onClick={() => window.open(url)} className="visit-btn">
        <div>
            <i className="fa fa-external-link" aria-hidden="true" />
            Visit on GitHub
        </div>
    </div>
);

export default VisitContent;
