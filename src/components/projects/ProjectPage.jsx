import React, { useState, useEffect, useContext } from 'react';
import ReactMarkdown from 'react-markdown';
import AwesomeSlider from 'react-awesome-slider';
import VisitContent from './VisitContent';
import { ApplicationContext } from '../Container';
import './ProjectPage.scoped.css';
import 'react-awesome-slider/dist/styles.css';

const ProjectPage = ({ match }) => {
  const {
    state: {
      content: { projects },
    },
  } = useContext(ApplicationContext);
  const id = match.params.id;
  const [error, setError] = useState(true);
  const [project, setProject] = useState({});

  useEffect(() => {
    const cachedProject = projects.find((project) => project._id === id);
    if (cachedProject) {
      setProject(cachedProject);
      setError(false);
    } else {
      setError(true);
    }
  }, [id, projects]);

  return (
    <div>
      <div className="project-page">
        {error ? (
          "There isn't any project like this, or it's still loading :("
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
