import React from 'react';

const ProjectListItem = (props) => {
	return (
		<div className="project-item">
			<img src={props.img} alt="" />
			<h3>{props.name}</h3>
			<p>{props.description}</p>
			<div className="langs">
				{props.langs.map((lang, index) => {
					return (
						<div key={index} className="tag">
							{lang}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default ProjectListItem;
