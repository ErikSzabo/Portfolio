import React, { useState, useContext } from 'react';
import DashboardList from './DashboardList';
import SkillEditor from './SkillEditor';
import Button from '../generic/Button';
import Popup from '../generic/Popup';
import { ApplicationContext, actions } from '../Container';
import './Dashboard.scoped.css';
import { deleteOne, types } from '../../api';

const Dashboard = () => {
  const {
    state: {
      content: { projects, skills },
    },
    dispatch,
  } = useContext(ApplicationContext);
  const [selected, setSelected] = useState('projects');
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState({});

  const onItemClicked = (item) => {
    setOpen(true);
    setCurrent(item);
  };

  const onItemDelete = async (item) => {
    const confirmed = window.confirm('Are you sure?');
    if (!confirmed) return;
    try {
      if (selected === 'skills') {
        await deleteOne(types.SKILL, item._id);
        dispatch({
          type: actions.SET_SKILLS,
          payload: skills.filter((skill) => skill._id !== item._id),
        });
      } else if (selected === 'projects') {
        await deleteOne(types.PROJECT, item._id);
        dispatch({
          type: actions.SET_SKILLS,
          payload: projects.filter((project) => project._id !== item._id),
        });
      }
    } catch (error) {
      // :(
    }
  };

  const onSkillSubmit = (isNew, item) => {
    if (isNew) {
      dispatch({
        type: actions.SET_SKILLS,
        payload: [...skills, item],
      });
    } else {
      dispatch({
        type: actions.SET_SKILLS,
        payload: skills.map((skill) => {
          if (skill._id === item._id) return item;
          return skill;
        }),
      });
    }
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
        <Button
          className="dashboard__add"
          type="ok"
          value="Add new"
          onClick={() => {
            setOpen(true);
            setCurrent({});
          }}
        />
      </div>

      <br />
      <br />
      <hr />

      <div className="dashboard__container">
        {selected === 'skills' ? (
          <DashboardList
            items={skills}
            onItemClick={onItemClicked}
            onItemDelete={onItemDelete}
          />
        ) : (
          <DashboardList
            items={projects}
            onItemClick={onItemClicked}
            onItemDelete={onItemDelete}
          />
        )}
      </div>

      <Popup open={open}>
        {selected === 'skills' ? (
          <SkillEditor
            skill={current}
            popupSetter={setOpen}
            onSubmit={onSkillSubmit}
          />
        ) : (
          current.name
        )}
      </Popup>
    </div>
  );
};

export default Dashboard;
