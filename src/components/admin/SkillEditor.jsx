import React, { useState } from 'react';
import Button from '../generic/Button';
import { postOne, types, updateOne } from '../../api';
import './SkillEditor.scoped.css';

const SkillEditor = ({ skill, popupSetter, onSubmit }) => {
  const [name, setName] = useState(skill.name);
  const [description, setDescription] = useState(skill.description);
  const [progress, setProgress] = useState(skill.progress);
  const [icon, setIcon] = useState(skill.icon);

  const [isNew] = useState(skill ? false : true);

  const submit = async (e) => {
    e.preventDefault();
    try {
      const data = { name, description, progress, icon };
      if (isNew) {
        const item = await postOne(types.SKILL, data);
        onSubmit(true, item);
      } else {
        const item = await updateOne(types.SKILL, skill._id, data);
        onSubmit(false, item);
      }
      popupSetter(false);
    } catch (error) {
      // :(
    }
  };

  return (
    <form className="skilleditor" onSubmit={submit}>
      <input
        type="text"
        value={name}
        placeholder="Name..."
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        value={description}
        placeholder="Description..."
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Progress 1 to 100..."
        value={progress}
        onChange={(e) => setProgress(e.target.value)}
      />
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
          onClick={() => popupSetter(false)}
        />
      </div>
    </form>
  );
};

export default SkillEditor;
