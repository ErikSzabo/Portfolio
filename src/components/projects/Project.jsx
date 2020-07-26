import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Tag from './Tag';

const Project = ({ id, name, img, description, tags }) => {
    const [imgLoaded, setImgLoaded] = useState(false);

    return (
        <Link to={`/projects/${id}`} className={!imgLoaded && 'hidden'}>
            <div className="project-item">
                <img onLoad={() => setImgLoaded(true)} src={img} alt="" />
                <div className="project-text">
                    <h3>{name}</h3>
                    <p>{description}</p>
                    <div className="project-tags">
                        {tags.map((tag, index) => {
                            return <Tag key={index} name={tag} />;
                        })}
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Project;
