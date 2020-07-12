import React from 'react';
import { Link } from 'react-router-dom';
import Tag from './Tag';

const Project = ({ name, img, description, tags }) => (
	<Link to={`/projects/${name}`}>
		<div className="project-item">
			<img src={img} alt="" />
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

export default Project;
