import React, { useState, useContext } from 'react';
import DashboardList from './DashboardList';
import SkillEditor from './SkillEditor';
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
  const [current, setCurrent] = useState({});

  const onItemClicked = (item) => {
    setOpen(true);
    setCurrent(item);
  };

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
          <DashboardList items={skills} onItemClick={onItemClicked} />
        ) : (
          <DashboardList items={projects} onItemClick={onItemClicked} />
        )}
      </div>

      <Popup open={open}>
        {selected === 'skills' ? (
          <SkillEditor skill={current} popupSetter={setOpen} />
        ) : (
          current.name
        )}
      </Popup>
    </div>
  );
};

export default Dashboard;
