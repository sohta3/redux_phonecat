import { connect } from 'react-redux'
import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute, hashHistory } from 'react-router'
import PhonecatContainer from '../containers/PhonecatContainer'
import PhonecatDetailContainer from '../containers/PhonecatDetailContainer'
import App from './App'


export default class Root extends Component {

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

