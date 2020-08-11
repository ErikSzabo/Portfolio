import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import DashboardList from './DashboardList';
import Button from '../generic/Button';
import { ApplicationContext, actions } from '../Container';
import { deleteOne, types } from '../../api';
import './Dashboard.scoped.css';

const Dashboard = () => {
  const {
    state: {
      content: { projects, skills },
    },
    dispatch,
  } = useContext(ApplicationContext);
  const history = useHistory();
  const [selected, setSelected] = useState('projects');

  const onItemClicked = (item) => {
    if (selected === 'projects') {
      history.push(`/dashboard/projects/${item._id}`);
    } else if (selected === 'skills') {
      history.push(`/dashboard/skills/${item._id}`);
    }
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
          type: actions.SET_PROJECTS,
          payload: projects.filter((project) => project._id !== item._id),
        });
      }
    } catch (error) {
      window.alert('Error');
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
            if (selected === 'skills') {
              history.push('/dashboard/skills');
            } else {
              history.push('/dashboard/projects');
            }
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
    </div>
  );
};

export default Dashboard;
