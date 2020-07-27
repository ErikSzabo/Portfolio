import React from 'react';
import { Link } from 'react-router-dom';
import './FormButtons.css';

const FormButtons = ({ submit }) => (
    <div className="form-buttons">
        <div onClick={submit} className="form-btn">
            Send message
        </div>
        <Link to="/projects">
            <div className="form-btn">
                I'm not sure{' '}
                <span role="img" aria-label="">
                    😢
                </span>
            </div>
        </Link>
    </div>
);

export default FormButtons;
