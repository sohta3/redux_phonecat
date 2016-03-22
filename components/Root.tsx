/// <reference path='../typings/tsd.d.ts'/>

import { connect } from 'react-redux'
import * as React from 'react';
import { Router, Route, Link, browserHistory, IndexRoute, hashHistory } from 'react-router'
import PhonecatContainer from '../containers/PhonecatContainer'
import PhonecatDetailContainer from '../containers/PhonecatDetailContainer'
import App from './App'


export default class Root extends React.Component<any, any> {
	render() {
		return (
			<Router history={hashHistory}>
				<Route path="/" component={App}>
					<IndexRoute component={PhonecatContainer}></IndexRoute>
					<Route path="/phonecat" component={PhonecatContainer}/>
					<Route path="/phonecat/:id" component={PhonecatDetailContainer}/>
				</Route>
			</Router>
		);
	}
}
