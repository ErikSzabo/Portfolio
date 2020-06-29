import React from 'react';
import { Link } from 'react-router-dom';

const colorMap = {
	JavaScript: {
		background: '#F0DB4F',
		front: '#000000'
	},
	CSS: {
		background: '#F954BE',
		front: '#313244'
	},
	Python: {
		background: '#3879AB',
		front: '#FFDA5D'
	},
	Java: {
		background: '#E76F00',
		front: '#242429'
	},
	React: {
		background: '#222222',
		front: '#00D8FF'
	},
	TypeScript: {
		background: '#2775C3',
		front: '#FFFFFF'
	},
	default: {
		background: '#454E56',
		front: '#B2BECD'
	}
};

const ProjectListItem = (props) => {
	function getStyle(lang) {
		if (!colorMap[lang]) {
			return { background: colorMap.default.background, color: colorMap.default.front };
		}
		return { background: colorMap[lang].background, color: colorMap[lang].front };
	}

	return (
		<Link to={`/projects/${props.name}`}>
			<div className="project-item">
				<img src={props.img} alt="" />
				<div className="project-text">
					<h3>{props.name}</h3>
					<p>{props.description}</p>
					<div className="langs">
						{props.langs.map((lang, index) => {
							return (
								<div key={index} className="tag" style={getStyle(lang)}>
									{lang}
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</Link>
	);
};

export default ProjectListItem;
