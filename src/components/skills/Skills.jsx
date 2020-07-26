import React, { useState, useEffect } from 'react';
import Skill from './Skill';

const Skills = () => {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        fetch('https://api.devrik.net/skills')
            .then((result) => result.json())
            .then((skills) => setSkills(skills));
    }, []);

    return (
        <div className="skills-container">
            <h1>Skills</h1>
            <div className="skills">
                {skills.map((skill, index) => (
                    <Skill
                        key={index}
                        name={skill.name}
                        fill={skill.progress}
                        description={skill.description}
                        logo={skill.icon}
                    />
                ))}
            </div>
        </div>
    );
};

export default Skills;
