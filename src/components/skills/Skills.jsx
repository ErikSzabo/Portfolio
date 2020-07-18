import React, { useState, useEffect } from 'react';
import Skill from './Skill';

const Skills = () => {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        (async () => {
            const raw = await fetch(
                'https://devrik-net.herokuapp.com/api/v1/skills'
            );
            const result = await raw.json();
            setSkills(result);
        })();
    }, []);

    return (
        <div className="skills-container">
            <h1>Skills</h1>
            <div className="skills">
                {skills.map((skill) => (
                    <Skill
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
