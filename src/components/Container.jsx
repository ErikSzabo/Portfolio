import React, { useEffect, useReducer } from 'react';
import { getProjects, getSkills } from '../api';
import './Container.scoped.css';

export const ApplicationContext = React.createContext({});

export const actions = {
  LOGIN: 'login',
  AUTH: 'auth',
  AUTH_FAILED: 'failed',
  SET_PROJECTS: 'set-projects',
  SET_SKILLS: 'set-skills',
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.LOGIN:
    case actions.AUTH:
      return {
        ...state,
        user: {
          isAuthenticated: true,
          isLoading: false,
          username: action.payload,
        },
      };
    case actions.AUTH_FAILED:
      return {
        ...state,
        user: {
          isAuthenticated: false,
          isLoading: false,
        },
      };
    case actions.SET_PROJECTS:
      return {
        ...state,
        content: {
          projects: action.payload,
          skills: state.content.skills,
        },
      };
    case actions.SET_SKILLS:
      return {
        ...state,
        content: {
          projects: state.content.projects,
          skills: action.payload,
        },
      };
    default:
      return { ...state };
  }
};

const Container = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    user: {
      isAuthenticated: false,
      isLoading: true,
      username: '',
    },
    content: {
      projects: [],
      skills: [],
    },
  });

  useEffect(() => {
    getProjects().then((projects) =>
      dispatch({ type: actions.SET_PROJECTS, payload: projects })
    );
    getSkills().then((skills) =>
      dispatch({ type: actions.SET_SKILLS, payload: skills })
    );
  }, []);

  return (
    <ApplicationContext.Provider value={{ state, dispatch }}>
      <div className="page-container">{children}</div>
    </ApplicationContext.Provider>
  );
};

export default Container;
