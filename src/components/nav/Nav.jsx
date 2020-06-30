import React from 'react';
import { Link } from 'react-router-dom';
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

			<Link className="nav-item" to="/">
				<NavItem name="Home" faIcon="fa fa-home fa-2x" />
			</Link>

			<Link className="nav-item" to="/projects/">
				<NavItem name="Projects" faIcon="fa fa-code fa-2x" />
			</Link>

			<Link className="nav-item" to="/skills/">
				<NavItem name="Skills" faIcon="fa fa-check-square fa-2x" />
			</Link>
			<Link className="nav-item" to="/contact/">
				<NavItem name="Contact" faIcon="fa fa-envelope fa-2x" />
			</Link>
		</ul>
	</nav>
);

export default Nav;
