import React, { useState, useContext } from 'react';
import Button from '../generic/Button';
import Popup from '../generic/Popup';
import { ApplicationContext } from '../Container';
import './Dashboard.scoped.css';

const Dashboard = () => {
  const {
    state: {
      content: { projects, skills },
    },
  } = useContext(ApplicationContext);
  const [selected, setSelected] = useState('projects');
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(null);

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
        <Button className="dashboard__add" type="ok" value="Add new" />
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
                    onClick={() => {
                      setOpen((prev) => !prev);
                      setCurrent(skill);
                    }}
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
      <Popup open={open}>
        <h1>Teszt</h1>
      </Popup>
    </div>
  );
};

export default Dashboard;
