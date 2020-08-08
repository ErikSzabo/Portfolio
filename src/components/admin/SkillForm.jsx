import React, { useState, useEffect } from 'react';
import { updateOne, types, postOne } from '../../api';
import './SkillForm.scoped.css';

const SkillForm = ({ skill }) => {
  const [exist, setExist] = useState(false);
  const [id, setID] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [icon, setIconUrl] = useState('');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (skill) {
      setID(skill._id);
      setName(skill.name);
      setDescription(skill.description);
      setIconUrl(skill.icon);
      setProgress(skill.progress);
      setExist(true);
    }
  }, [skill]);

  const submit = async (e) => {
    e.preventDefault();
    if (exist) {
      updateOne(types.SKILL, id, { name, description, icon, progress })
        .then(() => alert('Saved successfully!'))
        .catch((error) => alert(error.message));
    } else {
      postOne(types.SKILL, { name, description, icon, progress })
        .then(() => alert('Saved successfully!'))
        .catch((error) => alert(error.message));
    }
  };

  return (
    <form onSubmit={submit} className="skill-list">
      <div className="skill-group">
        <div className="edit-name">Name</div>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          value={name}
        />
      </div>
      <div className="skill-group">
        <div className="edit-name">Description</div>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
      </div>
      <div className="skill-group">
        <div className="edit-name">Icon URL</div>
        <input
          type="text"
          onChange={(e) => setIconUrl(e.target.value)}
          value={icon}
        />
      </div>
      <div className="skill-group">
        <div className="edit-name">Progress 1-100</div>
        <input
          type="number"
          onChange={(e) => setProgress(e.target.value)}
          value={progress}
        />
      </div>
      <div className="skill-buttons">
        <input type="submit" value="Save" />
        <button className="delete">Delete</button>
      </div>
    </form>
  );
};

export default SkillForm;
