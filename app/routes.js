import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import InitHomePage from './containers/InitHomePage';
import About from './components/About';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={InitHomePage} />
		<Route path="/about" component={About} />
	</Route>
);
