import React from 'react';
import { Link } from 'react-router-dom';

const NavItem = ({ target, name, faIcon }) => (
	<li className="nav-item">
		<Link to={target}>
			<i className={`${faIcon} link-icon`} aria-hidden="true" />
			<span className="link-text">{name}</span>
		</Link>
	</li>
);

export default NavItem;
