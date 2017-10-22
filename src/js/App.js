import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

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
  render() {
    return (
		<div>
			<AppNav></AppNav>
			<Main/>
			<AppFooter></AppFooter>
		</div>
    );
  }
}

export default App;
