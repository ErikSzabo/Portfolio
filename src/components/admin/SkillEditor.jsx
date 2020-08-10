import React, { useState, useCallback } from 'react';
import Button from '../generic/Button';
import { postOne, types, updateOne } from '../../api';
import './SkillEditor.scoped.css';

const SkillEditor = ({ skill, popupSetter }) => {
  const [state, setState] = useState({ ...skill });
  const [isNew] = useState(skill ? true : false);

  const submit = useCallback(async (e) => {
    e.preventDefault();
    try {
      if (isNew) {
        await postOne(types.SKILL, state);
      } else {
        const { _id, ...data } = state;
        await updateOne(types.SKILL, state._id, data);
      }
    } catch (error) {
      // :(
    }
  });

  return (
    <form className="skilleditor" onSubmit={submit}>
      <input
        type="text"
        value={state.name}
        placeholder="Name..."
        onChange={(e) =>
          setState((prev) => {
            return { ...prev, name: e.target.value };
          })
        }
      />
      <textarea
        value={state.description}
        placeholder="Description..."
        onChange={(e) =>
          setState((prev) => {
            return { ...prev, description: e.target.value };
          })
        }
      />
      <input
        type="number"
        placeholder="Progress 1 to 100..."
        value={state.progress}
        onChange={(e) =>
          setState((prev) => {
            return { ...prev, progress: e.target.value };
          })
        }
      />
      <input
        type="text"
        value={state.icon}
        placeholder="Icon URL..."
        onChange={(e) =>
          setState((prev) => {
            return { ...prev, icon: e.target.value };
          })
        }
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
