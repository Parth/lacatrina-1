//import 'materialize-css/dist/js/materialize.js';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import $ from 'jquery';
import matchHeight from 'jquery-match-height';

import AppNav from './AppNav.js';
import AppFooter from './AppFooter.js';

import Home from './views/Home.js';
import Menu from './views/Menu.js';
import Location from './views/Location.js';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/menu' component={Menu}/>
      <Route path='/location' component={Location}/>
    </Switch>
  </main>
)

class App extends Component {
	componentDidMount() {
		$(document).ready(function(){
			$('.equalize-mi').matchHeight();
			$('.equalize').matchHeight();
		});
	}

	componentDidUpdate() {
		$(document).ready(function(){
			$('.equalize-mi').matchHeight();
			$('.equalize').matchHeight();
		});
	}

	render() {
		return (
			<div>
				<AppNav/>
				<Main/>
				<AppFooter/>
			</div>
		);
	}
}

export default App;
