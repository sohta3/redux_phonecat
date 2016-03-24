/// <reference path='../typings/tsd.d.ts'/>

import { connect } from 'react-redux'
import * as React from 'react'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import Phonecat from '../components/Phonecat'


interface AppProps {
	children: any
}

export default class App extends React.Component<AppProps, any> {

	render() {
		return (
			<div> {this.props.children} </div>
		)
	}
}
