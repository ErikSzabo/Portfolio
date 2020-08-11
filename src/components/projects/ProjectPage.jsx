import React, { useState, useEffect, useContext } from 'react';
import ReactMarkdown from 'react-markdown';
import AwesomeSlider from 'react-awesome-slider';
import VisitContent from './VisitContent';
import { ApplicationContext } from '../Container';
import { getOne, types } from '../../api';
import './ProjectPage.scoped.css';
import 'react-awesome-slider/dist/styles.css';

const ProjectPage = ({ match }) => {
  const {
    state: {
      content: { projects },
    },
  } = useContext(ApplicationContext);
  const id = match.params.id;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [project, setProject] = useState({});

  useEffect(() => {
    const cachedProject = projects.find((project) => project._id === id);
    if (cachedProject) {
      setProject(cachedProject);
      setLoading(false);
      setError(false);
      return;
    }
    getOne(types.PROJECT, id)
      .then((project) => {
        setProject(project);
        setLoading(false);
        setError(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [id, projects]);

  return (
    <div>
      <div className="project-page">
        {loading ? null : error ? (
          'The requested project does not exist :(!'
        ) : (
          <div>
            <h1>{project.name}</h1>
            <p className="project-page__description">{project.description}</p>

            <VisitContent url={project.githubUrl} />

            <AwesomeSlider className="awesome-slider">
              {project.images.map((url) => (
                <div key={url} data-src={url} />
              ))}
            </AwesomeSlider>
            <ReactMarkdown source={project.content} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectPage;
