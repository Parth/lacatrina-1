import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';
import MenuItem from '../components/MenuItem'
import MenuData from '../data/MenuData'

class Menu extends Component {
	render() {
		return (
			<div className="container">
				<h2>Menu</h2>
				<Row>
					<MenuItem img="img/tacos.jpg" title="Tacos" desc="Fresh made corn tortillas filled with choice of meat, cilantro and onions" prices={[ "1 @ $2.50", "3 @ $7" ]}/>
				</Row>
			</div>
		);
	}
}

export default Menu;
