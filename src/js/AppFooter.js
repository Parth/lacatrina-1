import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';

class AppFooter extends Component {
	render() {
		return (
			<footer class="page-footer">
				<div class="container">
					<Row>
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
				</div>
				<div class="footer-copyright">
					<div class="container">
						<p>&copy; 2017 La Catrina</p>
					</div>
				</div>
			</footer>
			/*<div class='row'>
					<Row>
						<Col s={12} m={6}>Location</Col>
						<Col s={12} m={6}>Call</Col>
					</Row>
				</Footer>
			</div>*/
		);
	}
}

export default AppFooter;
