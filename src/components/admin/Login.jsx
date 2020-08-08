import React, { useState, useContext, useEffect } from 'react';
import { UserContext, actions } from '../Container';
import { login, auth, TOKEN_KEY } from '../../api';
import { Redirect } from 'react-router-dom';
import './Login.scoped.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  const { dispatch } = useContext(UserContext);

  useEffect(() => {
    if (localStorage.getItem(TOKEN_KEY)) {
      auth(localStorage.getItem(TOKEN_KEY))
        .then(() => setRedirect(true))
        .catch(() => {});
    }
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    try {
      const token = await login(username, password);
      localStorage.setItem(TOKEN_KEY, token);
      dispatch({ type: actions.LOGIN, payload: username });
      setRedirect(true);
    } catch (error) {
      setUsername('');
      setPassword('');
    }
  };

  return (
    <div className="login">
      {redirect && <Redirect to="/dashboard" />}
      <h1 className="login__header">Login</h1>
      <form className="login__form" onSubmit={submit}>
        <input
          className="login__input"
          type="text"
          placeholder="username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="login__input"
          type="password"
          placeholder="password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input className="login__submit" type="submit" value="Login!" />
      </form>
    </div>
  );
};

export default Login;
