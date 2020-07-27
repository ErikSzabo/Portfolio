import React, { useState } from 'react';
import './Skill.css';

const Skill = ({ name, logo, fill, description }) => {
    const [imgLoaded, setImgLoaded] = useState(false);

    return (
        <div className={`skill ${!imgLoaded && 'hidden'}`}>
            <div className="skill-name">
                <img onLoad={() => setImgLoaded(true)} src={logo} alt="" />
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
};

export default Skill;
