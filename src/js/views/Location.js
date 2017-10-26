import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';

class Location extends Component {
	render() {
		return (
			<div class="container">
				<Row>
					<h1>Location</h1>
					<Col s={12} m={6}>
						<a target="_blank" href="https://goo.gl/maps/pkdKyyRjtT52" rel="noopener noreferrer">
							<div class="card center-align">
								<div class="card-content card-pink">
									<i class="medium material-icons">directions</i>
									<p>Location</p>
								</div>
							</div>
						</a>
					</Col>
					<Col s={12} m={6}>
						<a href="tel:+1(732)-628-0451">
							<div class="card center-align">
								<div class="card-content card-pink">
									<i class="medium material-icons">phone</i>
									<p>Call</p>
								</div>
							</div>
						</a>
					</Col>
				</Row>

				<Row className="section">
					<Col s={12}>
						<div class="map-outer">
							<div class="video-container">
								<iframe
									allowfullscreen
									title="LaCatrina Google Map"
									frameborder="0"
									src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJXcZZRf_Gw4kRusYzkF3viJ4&key=AIzaSyAMhxFCopf3O90EnVIgzioAdmWGNojFI5A">
								</iframe>
							</div>
						</div>
					</Col>
				</Row>

				<div class="divider"></div>

				<Row className="section">
					<Col s={12} l={7} className="equalize">
						<img class="responsive-img" src="/img/la-catrina-inside.jpg" alt="LaCatrina (Inside)"/>
					</Col>
					<Col s={12} l={5} className="valign-wrapper equalize">
						<div>
							<h4>About</h4>
							<p>
								Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. 
								Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. 
								Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. 
							</p>
						</div>
					</Col>
				</Row>

				<div class="divider"></div>

				<Row className="section">
					<Col s={12} l={5} className="valign-wrapper equalize">
						<div>
							<h4>Staff</h4>
							<p>
								Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. 
								Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. 
								Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. 
							</p>
						</div>
					</Col>
					<Col s={12} l={7} className="equalize">
						<img class="responsive-img" src="/img/placeholder-512x512.png" alt="LaCatrina Staff"/>
					</Col>
				</Row>
			</div>
		);
	}
}

export default Location;
