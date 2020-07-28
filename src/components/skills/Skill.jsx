import React, { useState, useEffect } from 'react';
import useWebAnimations, { fadeIn } from '@wellyshen/use-web-animations';
import './Skill.scoped.css';

const Skill = ({ name, logo, fill, description }) => {
    const [imgLoaded, setImgLoaded] = useState(false);
    const { ref, animate } = useWebAnimations();

    useEffect(() => {
        animate({
            ...fadeIn,
            timing: { duration: 500 },
        });
    }, [imgLoaded, animate]);

    return (
        <div className={`skill ${!imgLoaded && 'hidden'}`} ref={ref}>
            <div className="skill__name">
                <img onLoad={() => setImgLoaded(true)} src={logo} alt="" />
                {name}
            </div>
            <div className="skill__description">{description}</div>
            <div className="skill__progress-bar">
                <div className="skill__progress-bar-bg">
                    <div
                        className="skill__progress-bar-front"
                        style={{ width: `${fill}%` }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Skill;
