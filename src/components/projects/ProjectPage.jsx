import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import AwesomeSlider from 'react-awesome-slider';
import VisitContent from './VisitContent';
import { getProjectPage } from '../../api';
import './ProjectPage.scoped.css';
import 'react-awesome-slider/dist/styles.css';

// project
// - name: string
// - description: string
// - githubUrl: string
// - images: string[] (actually url strings)
// - content: markdown string

const ProjectPage = ({ match }) => {
  const id = match.params.id;
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const project = await getProjectPage(id);
        setProject(project);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  return (
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
  );
};

export default ProjectPage;
