import React, { Component } from 'react';
import { Row } from 'react-materialize';
import MenuItem from '../components/MenuItem'
import MenuData from '../data/MenuData'

class Menu extends Component {
	render() {
		return (
			<div className="container">
				<h2>Menu</h2>
				<Row>
					{MenuData.classics.items.map((item) =>
						<MenuItem img={item.img} title={item.title} desc={item.desc} prices={item.prices}/>
					)}
				</Row>
			</div>
		);
	}
}

export default Menu;
