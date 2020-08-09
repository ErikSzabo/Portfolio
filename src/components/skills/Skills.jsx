import React, { useContext } from 'react';
import Skill from './Skill';
import { ApplicationContext } from '../Container';
import './Skills.scoped.css';

const Skills = () => {
  const {
    state: {
      content: { skills },
    },
  } = useContext(ApplicationContext);

  return (
    <div className="skills">
      <h1>Skills</h1>
      <div className="skills__wrapper">
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
