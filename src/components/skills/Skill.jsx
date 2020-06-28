import React from 'react';

const Skill = (props) => (
	<div className="skill">
		<div className="skill-name">
			<img src={props.logo} alt="" />
			{props.name}
		</div>
		<div className="skill-short">{props.children}</div>
		<div className="progress-bar">
			<div className="progress-bar-bg">
				<div className="progress-bar-front" style={{ width: `${props.fill}%` }} />
			</div>
		</div>
	</div>
);

export default Skill;
