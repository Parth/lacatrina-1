import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom'
import App from './js/App';

import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import './css/index.css';

ReactDOM.render((
	<HashRouter>
		<App />
	</HashRouter>
), document.getElementById('root'))
