import React from 'react';
import NavItem from './NavItem';

const Nav = () => (
	<nav className="navbar">
		<ul className="navbar-nav">
			<li className="logo">
				<div className="nav-link">
					<span className="link-text logo-text">devrik</span>
					<i className="fa fa-angle-double-right fa-2x" aria-hidden="true" />
				</div>
			</li>

			<NavItem name="Home" faIcon="fa fa-home fa-2x" />
			<NavItem name="About me" faIcon="fa fa-address-book fa-2x" />
			<NavItem name="Projects" faIcon="fa fa-file-code-o fa-2x" />
			<NavItem name="Skills" faIcon="fa fa-check-square fa-2x" />
		</ul>
	</nav>
);

export default Nav;
