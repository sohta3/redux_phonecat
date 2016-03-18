import { connect } from 'react-redux'
import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import Phonecat from '../components/Phonecat'


export default class App extends Component {

    render() {
        return (
            <div> {this.props.children} </div>
        );
    }
}

