import React from 'react';

const NavItem = (props) => (
	<li className="nav-item">
		<div className="nav-link">
			<i className={props.faIcon} aria-hidden="true" />
			<span className="link-text">{props.name}</span>
		</div>
	</li>
);

export default NavItem;
