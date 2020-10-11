import React, { useState, useEffect, useContext } from 'react';
import ReactMarkdown from 'react-markdown';
import { useHistory } from 'react-router-dom';
import { ApplicationContext, actions } from '../Container';
import Button from '../generic/Button';
import { postOne, types, updateOne } from '../../api';
import './ProjectEditor.scoped.css';
import CodeBlock from '../projects/CodeBlock';

const ProjectEditor = ({
  match: {
    params: { id },
  },
}) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [githubUrl, setGithubUrl] = useState('');
  const [images, setImages] = useState('');
  const [content, setContent] = useState('');
  const [imgPreview, setImgPreview] = useState('');
  const [tags, setTags] = useState('');
  const [filterTags, setFilterTags] = useState('');
  const [isNew] = useState(id ? false : true);

  const {
    state: {
      content: { projects },
    },
    dispatch,
  } = useContext(ApplicationContext);

  const history = useHistory();

  useEffect(() => {
    if (id) {
      const cachedProject = projects.find((project) => project._id === id);
      if (cachedProject) {
        setName(cachedProject.name);
        setDescription(cachedProject.description);
        setGithubUrl(cachedProject.githubUrl);
        setImages(cachedProject.images.join(', '));
        setContent(cachedProject.content);
        setImgPreview(cachedProject.imgPreview);
        setTags(cachedProject.tags.join(', '));
        setFilterTags(cachedProject.filterTags.join(', '));
      }
    }
  }, [id, projects]);

  const submit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        name,
        description,
        githubUrl,
        content,
        imgPreview,
        images: images.split(',').map((url) => url.trim()),
        tags: tags.split(',').map((tag) => tag.trim()),
        filterTags: filterTags.split(',').map((tag) => tag.trim()),
      };
      if (isNew) {
        const item = await postOne(types.PROJECT, data);
        dispatch({
          type: actions.SET_PROJECTS,
          payload: [...projects, item],
        });
      } else {
        const item = await updateOne(types.PROJECT, id, data);
        dispatch({
          type: actions.SET_PROJECTS,
          payload: projects.map((project) => {
            if (project._id === item._id) return item;
            return project;
          }),
        });
      }
      history.push('/dashboard');
    } catch (error) {
      window.alert('Error');
    }
  };

  return (
    <form className="projecteditor" onSubmit={submit}>
      <h1>Project Editor</h1>
      <div className="projecteditor__inputs">
        <div className="projecteditor__group">
          <label>Name</label>
          <input
            type="text"
            value={name}
            placeholder="Name..."
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="projecteditor__group">
          <label>Description</label>
          <input
            type="text"
            value={description}
            placeholder="Description..."
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="projecteditor__group">
          <label>Github URL</label>
          <input
            type="text"
            placeholder="Github URL..."
            value={githubUrl}
            onChange={(e) => setGithubUrl(e.target.value)}
          />
        </div>
        <div className="projecteditor__group">
          <label>Image preview URL</label>
          <input
            type="text"
            value={imgPreview}
            placeholder="Image preview URL..."
            onChange={(e) => setImgPreview(e.target.value)}
          />
        </div>
        <div className="projecteditor__group">
          <label>Images</label>
          <input
            type="text"
            value={images}
            placeholder="Image URLs..."
            onChange={(e) => setImages(e.target.value)}
          />
        </div>
        <div className="projecteditor__group">
          <label>Tags</label>
          <input
            type="text"
            value={tags}
            placeholder="Tags..."
            onChange={(e) => setTags(e.target.value)}
          />
        </div>
        <div className="projecteditor__group">
          <label>Filter tags</label>
          <input
            type="text"
            value={filterTags}
            placeholder="Filter tags..."
            onChange={(e) => setFilterTags(e.target.value)}
          />
        </div>
      </div>
      <div className="projecteditor__content">
        <textarea
          value={content}
          placeholder="Content..."
          onChange={(e) => setContent(e.target.value)}
        />
        <div className="projecteditor__preview">
          <ReactMarkdown
            className="markdown"
            source={content}
            renderers={{ code: CodeBlock }}
          />
        </div>
      </div>
      <div className="projecteditor__buttons">
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

export default ProjectEditor;
