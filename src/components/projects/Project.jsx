import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Tag from './Tag';
import useWebAnimations, { fadeIn } from '@wellyshen/use-web-animations';
import './Project.scoped.css';

const Project = ({ project }) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const { ref, animate } = useWebAnimations();

  useEffect(() => {
    animate({
      ...fadeIn,
      timing: { duration: 500 },
    });
  }, [imgLoaded, animate]);

  return (
    <Link
      to={`/projects/${project._id}`}
      className={!imgLoaded ? 'hidden' : undefined}
      ref={ref}
    >
      <div className="project">
        <img
          onLoad={() => setImgLoaded(true)}
          src={project.imgPreview}
          alt=""
        />
        <div className="project__text">
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <div className="project__tags">
            {project.tags.map((tag, index) => {
              return <Tag key={index} name={tag} />;
            })}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Project;
