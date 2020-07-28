import React, { useState } from 'react';
import useWebAnimations, { fadeIn } from '@wellyshen/use-web-animations';
import './Skill.css';

const Skill = ({ name, logo, fill, description }) => {
    const [imgLoaded, setImgLoaded] = useState(false);
    const { ref } = useWebAnimations({
        ...fadeIn,
        timing: { duration: 500 },
    });

    return (
        <div className={`skill ${!imgLoaded && 'hidden'}`} ref={ref}>
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
