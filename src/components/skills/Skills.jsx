import React, { useState, useEffect } from 'react';
import Skill from './Skill';
import { getSkills } from '../../api';
import './Skills.scoped.css';

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    getSkills().then((skills) => setSkills(skills));
  }, []);

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
