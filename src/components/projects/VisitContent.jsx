import React from 'react';
import './VisitContent.scoped.css';

const VisitContent = ({ url }) => (
    <div onClick={() => window.open(url)} className="visit">
        <div>
            <i className="fa fa-external-link" aria-hidden="true" />
            Visit on GitHub
        </div>
    </div>
);

export default VisitContent;
