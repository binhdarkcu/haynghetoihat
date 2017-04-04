import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import InitHomePage from './containers/InitHomePage';
import ViewAllCategory from './components/ViewAllCategory/View';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={InitHomePage} />
		<Route path="/viewall" component={ViewAllCategory} />
	</Route>
);
