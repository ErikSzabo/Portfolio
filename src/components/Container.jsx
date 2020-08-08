import React, { useEffect, useReducer } from 'react';
import { auth, TOKEN_KEY } from '../api';
import './Container.scoped.css';

export const UserContext = React.createContext({});

export const actions = {
  LOGIN: 'login',
  AUTH: 'auth',
  AUTH_FAILED: 'failed',
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.LOGIN:
    case actions.AUTH:
      return {
        ...state,
        isAuthenticated: true,
        username: action.payload,
      };
    case actions.AUTH_FAILED:
      return {
        ...state,
        isAuthenticated: false,
      };
    default:
      return { ...state };
  }
};

const Container = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    isAuthenticated: false,
    username: '',
  });

  useEffect(() => {
    const token = localStorage.getItem(TOKEN_KEY);
    if (!token) return;
    auth(token)
      .then((user) => dispatch({ type: actions.AUTH, payload: user.username }))
      .catch((error) => {});
  }, []);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <div className="page-container">{children}</div>
    </UserContext.Provider>
  );
};

export default Container;
