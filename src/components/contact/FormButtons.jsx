import React from 'react';
import { Link } from 'react-router-dom';
import './FormButtons.scoped.css';

const FormButtons = ({ submit }) => (
    <div className="container">
        <div onClick={submit} className="container__btn">
            Send message
        </div>
        <Link to="/projects">
            <div className="container__btn">
                I'm not sure{' '}
                <span role="img" aria-label="">
                    😢
                </span>
            </div>
        </Link>
    </div>
);

export default FormButtons;
