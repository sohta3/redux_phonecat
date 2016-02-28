import { connect } from 'react-redux'
import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute, hashHistory } from 'react-router'
import Phonecat from '../components/Phonecat'
import PhonecatDetail from '../components/PhonecatDetail'
import App from './App'


export default class Root extends Component {

    render() {
        return (
            <Router  history={hashHistory} >
                <Route path="/" component={App}>
                    <IndexRoute component={Phonecat}></IndexRoute>
                    <Route path="/phonecat" component={Phonecat}/>
                    <Route path="/phonecat/:id" component={PhonecatDetail}/>
                </Route>
            </Router>
        );
    }
}

