import React, { Component } from 'react';
import { Row, Carousel, Col, CardPanel } from 'react-materialize';

class Home extends Component {
	render() {
		return (
			<div>
				<div id="banner" className="">
					<Row className="center">
						<Col s={12}>
							<CardPanel className="teal lighten-4 black-text">
								<h1>La Catrina</h1>
									<a href="https://grubhub.com/" target="_blank" rel="noopener noreferrer" className='btn light-blue waves-effect waves-light'>Order</a>
								<a href="#menu" className='btn light-blue waves-effect waves-light'>See Menu</a>
						<Carousel
							//fixedItem={<div><a href="#menu" className='btn light-blue'>See Menu</a> <a href="#order" className='btn light-blue'>Order</a></div>}
							className='carousel'
							images={[
								'img/taco-salad.jpg',
								'img/empanadas.jpg',
								'img/tacos.jpg',
								'img/perros-calientes.jpg',
								'img/el-botenero.jpg',
								'img/ensalada-de-nopales.jpg',
								'img/arroz-con-mariscos.jpg'
							]}/>
							</CardPanel>
						</Col>
					</Row>
				</div>
			</div>
		);
	}
}

export default Home;
/*
				<div className="hide-on-med-and-up">
					<div class="container">
						<Carousel
							//fixedItem={<div><a href="#menu" className='btn light-blue'>See Menu</a> <a href="#order" className='btn light-blue'>Order</a></div>}
							className='carousel'
							images={[
								'img/taco-salad.jpg',
								'img/empanadas.jpg',
								'img/tacos.jpg',
								'img/perros-calientes.jpg',
								'img/el-botenero.jpg',
								'img/ensalada-de-nopales.jpg',
								'img/arroz-con-mariscos.jpg'
							]}/>
					</div>
				</div>
			 <div class="carousel">
    <a class="carousel-item" href="#one!"><img src="img/taco-salad.jpg"/></a>
    <a class="carousel-item" href="#two!"><img src="img/empanadas.jpg"/></a>
    <a class="carousel-item" href="#three!"><img src="img/tacos.jpg"/></a>
    <a class="carousel-item" href="#four!"><img src="img/perros-calientes.jpg"/></a>
    <a class="carousel-item" href="#five!"><img src="img/el-botenero.jpg"/></a>
  </div>
*/
