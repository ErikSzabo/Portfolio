import React from 'react';

const Skill = ({ name, logo, fill, description }) => (
    <div className="skill">
        <div className="skill-name">
            <img src={logo} alt="" />
            {name}
        </div>
        <div className="skill-short">{description}</div>
        <div className="progress-bar">
            <div className="progress-bar-bg">
                <div
                    className="progress-bar-front"
                    style={{ width: `${fill}%` }}
                />
            </div>
        </div>
    </div>
);

export default Skill;
