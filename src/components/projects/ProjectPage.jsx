import React, { useState, useEffect } from 'react';
import DirWatcher from '../../content/DirWatcher';

const ProjectPage = ({ match: { params: { id: name } } }) => {
	const [ content, setContent ] = useState('');

	useEffect(() => {
		setContent(DirWatcher);
		console.log(name);
	}, []);

	return (
		<div className="project-page">
			<h1>{name}</h1>
			{content}
		</div>
	);
};

export default ProjectPage;
