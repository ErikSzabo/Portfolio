import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { ApplicationContext, actions } from '../Container';
import Button from '../generic/Button';
import { login, TOKEN_KEY } from '../../api';
import './Login.scoped.css';

const Login = () => {
  const { state, dispatch } = useContext(ApplicationContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  useEffect(() => {
    if (state.user.isAuthenticated) history.push('/dashboard');
  }, [state.user.isAuthenticated, history]);

  const submit = async (e) => {
    e.preventDefault();
    try {
      const token = await login(username, password);
      localStorage.setItem(TOKEN_KEY, token);
      dispatch({ type: actions.LOGIN, payload: username });
      history.push('/dashboard');
    } catch (error) {
      setUsername('');
      setPassword('');
    }
  };

  return (
    <div className="login">
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
        <Button isSubmit type="ok" value="Login!" />
      </form>
    </div>
  );
};

export default Login;
