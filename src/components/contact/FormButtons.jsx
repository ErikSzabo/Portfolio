import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../generic/Button';
import './FormButtons.scoped.css';

const FormButtons = ({ submit }) => {
  const history = useHistory();

  return (
    <div className="container">
      <Button onClick={submit} type="ok" value="Send message" />
      <Button
        onClick={() => history.push('/projects')}
        type="cancel"
        value="I'm not sure 😢"
      />
    </div>
  );
};

export default FormButtons;
