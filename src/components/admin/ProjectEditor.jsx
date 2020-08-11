import React, { useState } from 'react';
import Button from '../generic/Button';
import { postOne, types, updateOne } from '../../api';
import './SkillEditor.scoped.css';

// project
// - name: string
// - description: string
// - githubUrl: string
// - images: string[] (actually url strings)
// - content: markdown string

const ProjectEditor = ({ skill: project, popupSetter, onSubmit }) => {
  const [name, setName] = useState(project.name || '');
  const [description, setDescription] = useState(project.description || '');
  const [githubUrl, setGuthubUrl] = useState(project.progress || '');
  const [images, setImages] = useState(project.icon || '');
  const [content, setContent] = useState(project.content || '');

  const [isNew] = useState(project ? false : true);

  const submit = async (e) => {
    e.preventDefault();
    try {
      const data = { name, description, progress, icon };
      if (isNew) {
        const item = await postOne(types.SKILL, data);
        onSubmit(true, item);
      } else {
        const item = await updateOne(types.SKILL, project._id, data);
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

export default ProjectEditor;
