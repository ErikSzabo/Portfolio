import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Tag from './Tag';
import useWebAnimations, { fadeIn } from '@wellyshen/use-web-animations';
import './Project.scoped.css';

const Project = ({ id, name, img, description, tags }) => {
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
            to={`/projects/${id}`}
            className={!imgLoaded && 'hidden'}
            ref={ref}
        >
            <div className="project">
                <img onLoad={() => setImgLoaded(true)} src={img} alt="" />
                <div className="project__text">
                    <h3>{name}</h3>
                    <p>{description}</p>
                    <div className="project__tags">
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
