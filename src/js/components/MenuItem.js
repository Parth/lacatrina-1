import React, { Component } from 'react';
import { Row, Col, Card, MediaBox } from 'react-materialize';

class MenuItem extends Component {
	render() {
		return (
			<Col s={12} m={6}>
				<Card className="menuItem">
					<Row>
						<Col s={4}>
							<MediaBox src={this.props.img} caption={this.props.desc} height="128"/>
						</Col>
						<Col s={8} style={{height: '100%'}} className="valign-wrapper">
							<div>
								<h4>{this.props.title}</h4>
							</div>
						</Col>
					</Row>
					<Row>
						<Col s={12}>
							<p>{this.props.desc}</p>
						</Col>
					</Row>
					<Row>
						<Col s={12} m={6}>
							<ul>
							{this.props.prices.map((price) =>
								<li key={price.toString()}>
									{price}
								</li>
							)}
							</ul>
						</Col>
						<Col s={12} m={6} className="right-align">
							<br/>
							<a href="https://grubhub.com" target="_blank" rel="noopener noreferrer">Order Now on Grubhub!</a>
						</Col>
					</Row>
				</Card>
			</Col>
		);
	}
}

export default MenuItem;
