import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import AwesomeSlider from 'react-awesome-slider';
import VisitContent from './VisitContent';
import { getOne, types } from '../../api';
import './ProjectPage.scoped.css';
import 'react-awesome-slider/dist/styles.css';

const ProjectPage = ({ match }) => {
  const id = match.params.id;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [project, setProject] = useState({});

  useEffect(() => {
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
  }, [id]);

  return (
    <div>
      <div className="project-page">
        {loading ? null : error ? (
          "There isn't any project with this id!"
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
