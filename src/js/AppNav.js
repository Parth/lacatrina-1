import React, { Component } from 'react';
import { Navbar, NavItem } from 'react-materialize';

class AppNav extends Component {
	render() {
		return (
			<div id="navWrap" class='row'>
				<Navbar brand='La Catrina' href="#" right>
					<NavItem>
						<a href='https://grubhub.com/' target="_blank" rel="noopener noreferrer">Order</a>
					</NavItem>
					<NavItem href='#menu'>Menu</NavItem>
					<NavItem href='#location'>Location</NavItem>
					<NavItem href='#call'>Call</NavItem>
				</Navbar>
			</div>
		);
	}
}

export default AppNav;
