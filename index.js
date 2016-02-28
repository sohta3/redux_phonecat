import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import App from './containers/App'
import Root from './containers/Root'
import Phonecat from './components/Phonecat'
import {phones, phone} from './reducers'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'

const store = createStore(combineReducers({phones, phone}), {phones: {processedPhones: []}}, applyMiddleware(thunkMiddleware, createLogger()))
const rootEl = document.getElementById('root')

function render() {
  ReactDOM.render(
  <Provider  store={store}>
    <Root/>
  </Provider>,
    rootEl
  )
}

render()
store.subscribe(render)
