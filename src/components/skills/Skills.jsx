import React, { useContext } from 'react';
import { ApplicationContext } from '../Container';
import Skill from './Skill';

const Skills = () => {
    const { skills, loading } = useContext(ApplicationContext);

    return (
        <div className="skills-container">
            <h1>Skills</h1>
            <div className="skills">
                {!loading &&
                    skills.map((skill, index) => (
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
