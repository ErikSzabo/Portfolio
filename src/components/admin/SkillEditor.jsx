import React, { useState } from 'react';
import Button from '../generic/Button';
import './SkillEditor.scoped.css';

const SkillEditor = ({ skill, popupSetter }) => {
  const [state, setState] = useState({ ...skill });

  return (
    <form className="skilleditor">
      <input
        type="text"
        value={state.name}
        onChange={(e) =>
          setState((prev) => {
            return { ...prev, name: e.target.value };
          })
        }
      />
      <textarea
        value={state.description}
        onChange={(e) =>
          setState((prev) => {
            return { ...prev, description: e.target.value };
          })
        }
      />
      <input
        type="number"
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
