import React, { useState, useEffect } from 'react';
import { getProjects, getSkills } from '../../api';
import './Dashboard.scoped.css';

const Dashboard = () => {
  const [selected, setSelected] = useState('projects');
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    getProjects().then(setProjects).catch();
    getSkills().then(setSkills).catch();
  }, []);

  return (
    <div className="dashboard">
      <h1 className="dashboard__title">Dashboard</h1>
      <div className="dashboard__inputs">
        <select
          onChange={(e) => setSelected(e.target.value)}
          className="dashboard__select"
          name="tab"
          id="tab"
        >
          <option value="projects">Projects</option>
          <option value="skills">Skills</option>
        </select>
        <button className="dashboard__add">Add new</button>
      </div>

      <br />
      <br />
      <hr />
      <div className="dashboard__container">
        {selected === 'skills' ? (
          <div className="dashboard__skills">
            <div className="dash-skill">
              {skills.map((skill, index) => (
                <div key={index} className="dash-skill-item">
                  {skill.name}
                  <i
                    className="fa fa-pencil-square-o fa-2x"
                    aria-hidden="true"
                  />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="dashboard__projects">
            <div className="dash-project">
              {projects.map((project, index) => (
                <div key={index} className="dash-project-item">
                  {project.name}
                  <i
                    className="fa fa-pencil-square-o fa-2x"
                    aria-hidden="true"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
