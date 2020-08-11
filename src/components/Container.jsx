import React, { useEffect, useReducer } from 'react';
import { auth, TOKEN_KEY, getAll, types } from '../api';
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
          username: action.payload,
        },
      };
    case actions.AUTH_FAILED:
      return {
        ...state,
        user: {
          isAuthenticated: false,
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
      username: '',
    },
    content: {
      projects: [],
      skills: [],
    },
  });

  useEffect(() => {
    const token = localStorage.getItem(TOKEN_KEY);
    if (token) {
      auth(token)
        .then((user) =>
          dispatch({ type: actions.AUTH, payload: user.username })
        )
        .catch();
    }
    getAll(types.PROJECT)
      .then((projects) =>
        dispatch({ type: actions.SET_PROJECTS, payload: projects })
      )
      .catch();
    getAll(types.SKILL)
      .then((skills) => dispatch({ type: actions.SET_SKILLS, payload: skills }))
      .catch();
  }, []);

  return (
    <ApplicationContext.Provider value={{ state, dispatch }}>
      <div className="page-container">{children}</div>
    </ApplicationContext.Provider>
  );
};

export default Container;
