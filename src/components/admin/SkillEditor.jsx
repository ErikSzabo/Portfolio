import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { ApplicationContext, actions } from '../Container';
import Button from '../generic/Button';
import { postOne, types, updateOne } from '../../api';
import './SkillEditor.scoped.css';

const SkillEditor = ({
  match: {
    params: { id },
  },
}) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [progress, setProgress] = useState('');
  const [icon, setIcon] = useState('');
  const [isNew] = useState(id ? false : true);

  const {
    state: {
      content: { skills },
    },
    dispatch,
  } = useContext(ApplicationContext);

  const history = useHistory();

  useEffect(() => {
    if (id) {
      const cachedSkill = skills.find((skill) => skill._id === id);
      if (cachedSkill) {
        setName(cachedSkill.name);
        setDescription(cachedSkill.description);
        setProgress(cachedSkill.progress);
        setIcon(cachedSkill.icon);
      }
    }
  }, [id, skills]);

  const submit = async (e) => {
    e.preventDefault();
    try {
      const data = { name, description, progress, icon };
      if (isNew) {
        const item = await postOne(types.SKILL, data);
        dispatch({
          type: actions.SET_SKILLS,
          payload: [...skills, item],
        });
      } else {
        const item = await updateOne(types.SKILL, id, data);
        dispatch({
          type: actions.SET_SKILLS,
          payload: skills.map((skill) => {
            if (skill._id === item._id) return item;
            return skill;
          }),
        });
      }
      history.push('/dashboard');
    } catch (error) {
      window.alert('Error');
    }
  };

  return (
    <form className="skilleditor" onSubmit={submit}>
      <h1>Skill Editor</h1>
      <label>Name</label>
      <input
        type="text"
        value={name}
        placeholder="Name..."
        onChange={(e) => setName(e.target.value)}
      />
      <label>Description</label>
      <textarea
        value={description}
        placeholder="Description..."
        onChange={(e) => setDescription(e.target.value)}
      />
      <label>Progress</label>
      <input
        type="number"
        placeholder="Progress 1 to 100..."
        value={progress}
        onChange={(e) => setProgress(e.target.value)}
      />
      <label>Icon URL</label>
      <input
        type="text"
        value={icon}
        placeholder="Icon URL..."
        onChange={(e) => setIcon(e.target.value)}
      />
      <div className="skilleditor__buttons">
        <Button type="ok" isSubmit value="Save" />
        <Button
          type="cancel"
          value="Cancel"
          onClick={() => history.push('/dashboard')}
        />
      </div>
    </form>
  );
};

export default SkillEditor;
